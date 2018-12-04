const switchnodes = (nodes, fromPosition, toPosition) => {
  const switchNodes = nodes.filter((node) => {
    return (
      node.top === fromPosition.top &&
      node.left === fromPosition.left
      ||
      node.top === toPosition.top &&
      node.left === toPosition.left
    );
  });

  const fromNode = switchNodes[0];
  const toNode = switchNodes[1];

  return nodes.map((node) => {
    if (node.value === fromNode.value) {
      return { ...node, value: toNode.value };
    }

    if (node.value === toNode.value) {
      return { ...node, value: fromNode.value };
    }

    return node;
  });
};

export default switchnodes;
