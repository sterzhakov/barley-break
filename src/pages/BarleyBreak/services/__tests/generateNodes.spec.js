import generateNodes from '../generateNodes';

describe('services/generateNodeInRows', () => {
  it('generate nodes in rows with right positions', () => {
    const nodes = generateNodes(3);
    const positions = [
      { top: 0, left: 0 },
      { top: 0, left: 1 },
      { top: 0, left: 2 },
      { top: 1, left: 0 },
      { top: 1, left: 1 },
      { top: 1, left: 2 },
      { top: 2, left: 0 },
      { top: 2, left: 1 },
      { top: 2, left: 2 },
    ];

    positions.forEach((position, index) => {
      expect(nodes[index]).toEqual(
        jasmine.objectContaining(position)
      );
    });
  });

  it('generate nodes in rows randomly', () => {
    expect(
      generateNodes(3)
    ).not.toEqual(
      generateNodes(3)
    );
  });
});
