const stepsCountReducer = (stepsCount = 0, action) => {
  switch (action.type) {
    case 'INCREASE_STEP_COUNT':
      return stepsCount + 1;
    case 'RESET_STEP_COUNT':
      return 0;
    default:
      return stepsCount;
  }
};

export default stepsCountReducer;
