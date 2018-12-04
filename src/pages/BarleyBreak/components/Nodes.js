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
        return (
          <div
            key={node.value}
            className={classNames(classes.node, {
              nodeBreak: node.value === null
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
  },
  node: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default withStyles(styles)(Nodes);
