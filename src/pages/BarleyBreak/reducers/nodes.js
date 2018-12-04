const nodesReducer = (nodes = [], action) => {
  switch (action.type) {
    case 'REPLACE_NODES':
      return action.nodes;
    default:
      return nodes;
  }
};

export default nodesReducer;
