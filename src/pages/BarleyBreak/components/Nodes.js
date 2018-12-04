import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';

const Nodes = (props = {}) => {
  const {
    nodes,
    classes,
  } = props;

  return (
    <div className={classes.nodes}>
      {nodes.map((node) => {
        const isNodeBreak = node.value === null;
        return (
          <div
            key={node.value}
            className={classNames(classes.node, {
              [classes.nodeBreak]: isNodeBreak,
              [classes.nodeNumber]: !isNodeBreak,
              [classes.nodeSelected]: node.selected,
            })
          }>
            {node.value}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  nodes: {
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    backgroundColor: '#ebebeb',
  },
  node: {
    fontSize: '30px',
    margin: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    cursor: 'pointer',

  },
  nodeBreak: {
  },
  nodeNumber: {
    color: '#ffffff',
    backgroundColor: '#f69337',
    '&:hover': {
      backgroundColor: '#ee8523',
    }
  },
  nodeSelected: {
    backgroundColor: '#62aa19',
    '&:hover': {
      backgroundColor: '#62aa19',
    }
  }
};

export default withStyles(styles)(Nodes);
