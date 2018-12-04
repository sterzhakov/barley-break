import countPositionSteps from '../countPositionSteps';

describe('services/countPositionSteps', () => {
  it('between 1,1 and 0,0', () => {
    const fromNode = { top: 0, left: 0 };
    const toNode = { top: 1, left: 1 };
    expect(
      countPositionSteps(fromNode, toNode)
    ).toBe(2);
  });

  it('between 2,2 and 0,0', () => {
    const fromNode = { top: 0, left: 0 };
    const toNode = { top: 2, left: 2 };
    expect(
      countPositionSteps(fromNode, toNode)
    ).toBe(4);
  });

  it('between 0,0 and 2,2', () => {
    const fromNode = { top: 1, left: 1 };
    const toNode = { top: 2, left: 2 };
    expect(
      countPositionSteps(fromNode, toNode)
    ).toBe(2);
  });
});
