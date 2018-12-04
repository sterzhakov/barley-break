import _ from 'lodash';

const nodesReducer = (nodes = [], action) => {
  switch (action.type) {
    case 'REPLACE_NODES':
      return action.nodes;
    case 'TOGGLE_NODE':
      return nodes.map((node) => {
        return (
          node.top === action.top && node.left === action.left
            ? { ...node, selected: !node.selected }
            : _.omit(node, 'selected')
        );
      });
    default:
      return nodes;
  }
};

export default nodesReducer;
