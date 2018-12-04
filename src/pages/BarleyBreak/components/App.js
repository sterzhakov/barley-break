import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { toggleNode, replaceNodes } from '../actions/nodes';
import { increaseStepCount, resetStepCount } from '../actions/stepsCount';
import Nodes from './Nodes';
import isWinningNodes from '../services/isWinningNodes';
import generateNodes from '../services/generateNodes';
import { compose } from 'recompose';

const mapStateToProps = state => ({
  nodes: state.nodes,
  stepsCount: state.stepsCount,
});

const mapDispatchToProps = dispatch => ({
  onResetButtonClick: () => {
    const nodes = generateNodes(3);
    dispatch(resetStepCount());
    dispatch(replaceNodes(nodes));
  },
  toggleNode: ({ top, left }) => {
    dispatch(toggleNode({ top, left }));
  },
  replaceNodes: (nodes) => dispatch(replaceNodes(nodes)),
  increaseStepCount: () => dispatch(increaseStepCount()),
  resetStepCount: () => dispatch(resetStepCount()),
});

const BarleyBreak = (props = {}) => {
  const {
    classes,
    nodes,
    stepsCount,
  } = props;

  return (
    <div className={classes.root}>
      <button
        onClick={props.onResetButtonClick}
        className={classes.button}
      >
        Начать заново
      </button>
      <Nodes
        nodes={nodes}
        replaceNodes={props.replaceNodes}
        toggleNode={props.toggleNode}
        increaseStepCount={props.increaseStepCount}
      />
      {isWinningNodes(nodes) ? (
        <div className={classes.victory}>
          Победа!
        </div>
      ) : null}
      <div className={classes.stepsCount}>
        Шагов - {stepsCount}
      </div>
    </div>
  );
};

const styles = {
  root: {
  },
  stepsCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '30px',
  },
  victory: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '196px',
    height: '46px',
    color: '#ffffff',
    fontSize: '30px',
    backgroundColor: '#9a08ff',
    border: '2px solid #ffffff',
  },
  button: {
    cursor: 'pointer',
    border: '2px solid #ffffff',
    width: '200px',
    heigth: '100px',
    backgroundColor: '#1a98df',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '20px',
    fontFamily: 'Times',
    '&:focus': {
      outline: '0',
    },
    '&:hover': {
      backgroundColor: '#0f8bd1',
    }
  },
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(BarleyBreak);
