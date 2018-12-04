const countPositionSteps = (fromPosition, toPosition) => {
  return (
    Math.abs(fromPosition.top - toPosition.top) +
    Math.abs(fromPosition.left - toPosition.left)
  );
};

export default countPositionSteps;
