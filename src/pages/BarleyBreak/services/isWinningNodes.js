const isWinningnodes = (nodes) => {
  const numberNodes = nodes.filter((node => node.value !== null));
  return numberNodes.every((node, index) => {
      if (index === 0) return true;
      const prevNode = numberNodes[index - 1];
      return prevNode.value < node.value;
    });
};

export default isWinningnodes;
