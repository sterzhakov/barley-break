export const toggleNode = ({ top, left }) => ({
  type: 'TOGGLE_NODE',
  top,
  left,
});

export const replaceNodes = nodes => ({
  type: 'REPLACE_NODES',
  nodes,
});
