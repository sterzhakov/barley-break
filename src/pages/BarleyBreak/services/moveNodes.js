export const TOP = 'top';
export const LEFT = 'left';
export const RIGHT_TO_LEFT = 'RIGHT_TO_LEFT';
export const LEFT_TO_RIGHT = 'LEFT_TO_RIGHT';

const findBreakNode = (nodes, nextBreakNode) => {
  return nodes.find((node) => {
    const isSameAlignNode = (
      node[TOP] === nextBreakNode[TOP] ||
      node[LEFT] === nextBreakNode[LEFT]
    );
    return isSameAlignNode && node.value === null;
  });
};

const getMutationAlign = (breakNode, nextBreakNode) => {
  if (breakNode[TOP] === nextBreakNode[TOP]) return TOP;
  if (breakNode[LEFT] === nextBreakNode[LEFT]) return LEFT;
  return null;
};

const getMutationDirection = (breakNode, nextBreakNode, mutationIndexKey) => {
  if (nextBreakNode[mutationIndexKey] < breakNode[mutationIndexKey]) {
    return LEFT_TO_RIGHT;
  }
  if (nextBreakNode[mutationIndexKey] > breakNode[mutationIndexKey]) {
    return RIGHT_TO_LEFT;
  }
  return null;
};

const createNextValue = (params = {}) => {
  const {
    node,
    prevNode,
    nextNode,
    nextBreakNode,
    mutationDirection,
  } = params;
  const isBreakNode = isNodesEqual(node, nextBreakNode);

  if (mutationDirection === LEFT_TO_RIGHT && prevNode && !isBreakNode) {
    return prevNode.value;
  }
  if (mutationDirection === RIGHT_TO_LEFT && nextNode && !isBreakNode) {
    return nextNode.value;
  }
  return null;
};

const isNodesEqual = (leftNode, rightNode) => {
  return (
    leftNode.top === rightNode.top &&
    leftNode.left === rightNode.left &&
    leftNode.value === rightNode.value
  );
};

const moveNodes = (nodes, nextBreakNode) => {
  const defaultResult = {
    breakNode: null,
    nextNodes: nodes,
    mutableNodes: [],
    changedNodes: [],
    mutationAlign: null,
    mutationDirection: null,
    mutationIndexKey: null,
    mutationLeftIndex: null,
    mutationRightIndex: null,
  };

  const breakNode = findBreakNode(nodes, nextBreakNode);
  if (!breakNode) return defaultResult;

  const mutationAlign = getMutationAlign(breakNode, nextBreakNode);
  if (!mutationAlign) return defaultResult;

  const mutationIndexKey = [TOP,LEFT]
    .filter((key) => key !== mutationAlign)[0];

  const mutationDirection =
    getMutationDirection(breakNode, nextBreakNode, mutationIndexKey);

  const [
    mutationLeftIndex,
    mutationRightIndex,
  ] = [
    nextBreakNode[mutationIndexKey],
    breakNode[mutationIndexKey]
  ].sort();

  const moveDefaults = {
    mutableNodes: [],
    changedNodes: [],
    nextNodes: [],
    prevNode: null,
    nextNode: null,
    mutableNodeIndex: 0,
  };

  const mutableNodes = nodes
    .filter((node) => node[mutationAlign] === breakNode[mutationAlign])
    .slice(mutationLeftIndex, mutationRightIndex + 1);

  const moveResult = nodes.reduce((memo, node) => {
    const { changedNodes, nextNodes, mutableNodeIndex } = memo;
    const isNodeAndBreakAlignEqual =
      node[mutationAlign] === breakNode[mutationAlign];
    const isNodeForChange = (
      isNodeAndBreakAlignEqual &&
      node[mutationIndexKey] >= mutationLeftIndex &&
      node[mutationIndexKey] <= mutationRightIndex
    );
    if (!isNodeForChange) {
      return { ...memo, nextNodes: [ ...nextNodes, node ] };
    }

    const prevNodeIndex = mutableNodeIndex - 1;
    const nextNodeIndex = mutableNodeIndex + 1;

    const prevNode = mutableNodes[prevNodeIndex] || null;
    const nextNode = mutableNodes[nextNodeIndex] || null;

    const nextValue = createNextValue({
      node,
      prevNode,
      nextNode,
      nextBreakNode,
      mutationDirection,
    });

    const changedNode = { ...node, value: nextValue };
    const newNextNodes = [ ...nextNodes, changedNode ];

    const newChangedNodes = [ ...changedNodes, changedNode ];
    return {
      changedNodes: newChangedNodes,
      nextNodes: newNextNodes,
      mutableNodeIndex: mutableNodeIndex + 1,
    };
  }, moveDefaults);

  return {
    ...defaultResult,
    breakNode,
    mutationAlign,
    mutationDirection,
    mutationIndexKey,
    mutationLeftIndex,
    mutationRightIndex,
    mutableNodes,
    ...moveResult,
  };
};

export default moveNodes;
