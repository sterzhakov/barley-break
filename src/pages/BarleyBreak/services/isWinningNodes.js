const isWinningnodes = (nodes) => {
  return nodes.filter((node => node)).every((node, index) => {
    if (index === 0) return true;
    const prevNode = nodes[index - 1];
    return prevNode.value < node.value;
  });
};

export default isWinningnodes;
