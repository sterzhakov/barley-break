const isWinningnodes = (nodes) => {
  return nodes.every((node, index) => {
    if (index === 0 || node.value === null) return true;
    const prevNode = nodes[index - 1];
    if (prevNode.value === null) return true;
    return prevNode.value < node.value;
  });
};

export default isWinningnodes;
