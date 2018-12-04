import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import _ from 'lodash';
import { compose, withHandlers } from 'recompose';
import countPositionSteps from '../services/countPositionSteps';
import switchNodes from '../services/switchNodes';

const handlers = [
  withHandlers({
    onElementClick: (props) => (event, numberNode) => {
      if (numberNode.value === null) return null;
      const breakedNode = props.nodes.find(node => node.value === null);
      if (!breakedNode) return null;
      const positionsStepsCount = countPositionSteps(numberNode, breakedNode);
      if (positionsStepsCount > 1) return null;
      const nodes = switchNodes(props.nodes, numberNode, breakedNode);
      props.replaceNodes(nodes);
      props.increaseStepCount();
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
    const nodesWidthCount = nodes.length / Math.sqrt(nodes.length);
    const gridTemplateFr = _.fill(Array(nodesWidthCount), '1fr').join(' ');
    return {
      width: '200px',
      height: '200px',
      display: 'grid',
      gridTemplateColumns: gridTemplateFr,
      gridTemplateRows: gridTemplateFr,
      backgroundColor: '#ebebeb',
    };
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

export default compose(
  ...handlers,
  withStyles(styles),
)(Nodes);
