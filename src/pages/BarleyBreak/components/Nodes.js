import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import _ from 'lodash';
import { compose, withHandlers } from 'recompose';
import moveNodes from '../services/moveNodes';

const handlers = [
  withHandlers({
    onElementClick: (props) => (event, nextBreakNode) => {
      if (nextBreakNode.value === null) return null;
      const { nextNodes, changedNodes } = moveNodes(props.nodes, nextBreakNode);
      if (changedNodes.length) {
        props.replaceNodes(nextNodes);
        props.increaseStepCount();
      }
    },
  }),
];

const Nodes = (props = {}) => {
  const {
    nodes,
    classes,
    onChange,
  } = props;

  return (
    <div className={classes.nodes}>
      {nodes.map((node) => {
        const isNodeBreak = node.value === null;
        return (
          <div
            key={node.value}
            onClick={(event) => props.onElementClick(event, node)}
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
  nodes: (props = {}) => {
    const { nodes } = props;
    const nodesWidthCount = nodes.length / props.width;
    const nodesHeightCount = nodes.length / props.height;
    return {
      width: '200px',
      height: 'auto',
      display: 'grid',
      gridTemplateColumns: _.fill(Array(nodesHeightCount), '1fr').join(' '),
      gridTemplateRows: _.fill(Array(nodesWidthCount), '1fr').join(' '),
      backgroundColor: '#ebebeb',
    };
  },
  node: {
    fontSize: '30px',
    height: '1fr',
    width: '1fr',
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

export default compose(
  ...handlers,
  withStyles(styles),
)(Nodes);
