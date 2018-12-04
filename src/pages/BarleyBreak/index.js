import React from 'react';
import withStyles from 'react-jss';
import Nodes from './components/Nodes';
import isWinningNodes from './services/isWinningNodes';

const nodes = [
  { top: 0, left: 0, value: 1, },
  { top: 0, left: 1, value: 2, },
  { top: 0, left: 2, value: 3, selected: true },
  { top: 1, left: 0, value: 4, },
  { top: 1, left: 1, value: null, },
  { top: 1, left: 2, value: 5, },
  { top: 2, left: 0, value: 6, },
  { top: 2, left: 1, value: 7, },
  { top: 2, left: 2, value: 8, },
];

const BarleyBreak = (props = {}) => {
  const {
    classes,
  } = props;

  return (
    <div className={classes.root}>
      <button className={classes.button}>
        Начать заново
      </button>
      <Nodes nodes={nodes} />
      {isWinningNodes(nodes) ? (
        <div className={classes.victory}>
          Победа!
        </div>
      ) : null}
      <div className={classes.stepsCount}>
        Шагов - 5
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

export default withStyles(styles)(BarleyBreak);
