import React from 'react';
import withStyles from 'react-jss';
import Nodes from './components/Nodes';

const store = {
  nodes: [
    { top: 0, left: 0, value: 1, },
    { top: 0, left: 1, value: 2, },
    { top: 0, left: 2, value: 3, selected: true },
    { top: 1, left: 0, value: 4, },
    { top: 1, left: 1, value: null, },
    { top: 1, left: 2, value: 5, },
    { top: 2, left: 0, value: 6, },
    { top: 2, left: 1, value: 7, },
    { top: 2, left: 2, value: 8, },
  ],
};

const BarleyBreak = (props = {}) => {
  const {
    nodes,
  } = store;
  return (
    <div>
      <div>Winner</div>
      <div>Шагов - 5</div>
      <button>Начать заново</button>
      <Nodes nodes={nodes} />
    </div>
  );
};

const styles = {

};

export default withStyles(styles)(BarleyBreak);
