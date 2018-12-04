import switchNodes from '../switchNodes';

const nodes = [
  { top: 0, left: 0, value: 1, },
  { top: 0, left: 1, value: 2, },
  { top: 0, left: 2, value: 3, },
  { top: 1, left: 0, value: 4, },
  { top: 1, left: 1, value: null, },
  { top: 1, left: 2, value: 5, },
  { top: 2, left: 0, value: 6, },
  { top: 2, left: 1, value: 7, },
  { top: 2, left: 2, value: 8, },
];

describe('services/switchNodes', () => {
  it('switch 1,1 to 0,1', () => {
    expect(
      switchNodes(nodes, { top: 1, left: 1 }, { top: 0, left: 1 })
    ).toEqual([
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: null, },
      { top: 0, left: 2, value: 3, },
      { top: 1, left: 0, value: 4, },
      { top: 1, left: 1, value: 2, },
      { top: 1, left: 2, value: 5, },
      { top: 2, left: 0, value: 6, },
      { top: 2, left: 1, value: 7, },
      { top: 2, left: 2, value: 8, },
    ]);
  });

  it('switch 1,1 to 1,0', () => {
    expect(
      switchNodes(nodes, { top: 1, left: 1 }, { top: 1, left: 0 })
    ).toEqual([
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 0, left: 2, value: 3, },
      { top: 1, left: 0, value: null, },
      { top: 1, left: 1, value: 4, },
      { top: 1, left: 2, value: 5, },
      { top: 2, left: 0, value: 6, },
      { top: 2, left: 1, value: 7, },
      { top: 2, left: 2, value: 8, },
    ]);
  });
});
