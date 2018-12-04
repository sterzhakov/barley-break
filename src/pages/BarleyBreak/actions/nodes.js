export const toggleNode = ({ top, bottom }) => ({
  type: 'TOGGLE_NODE',
  top,
  bottom,
});

export const replaceNodes = nodes => ({
  type: 'REPLACE_NODES',
  nodes,
});
