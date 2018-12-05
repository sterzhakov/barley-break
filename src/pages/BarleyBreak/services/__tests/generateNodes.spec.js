import generateNodes from '../generateNodes';

fdescribe('services/generateNodeInRows', () => {
  it('generate nodes 3x3', () => {
    const nodes = generateNodes(3, 3);
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

  fit('generate nodes 3x5', () => {
    const nodes = generateNodes(5, 3);
    const positions = [
      { top: 0, left: 0 },
      { top: 0, left: 1 },
      { top: 0, left: 2 },
      { top: 0, left: 3 },
      { top: 0, left: 4 },
      { top: 1, left: 0 },
      { top: 1, left: 1 },
      { top: 1, left: 2 },
      { top: 1, left: 3 },
      { top: 1, left: 4 },
      { top: 2, left: 0 },
      { top: 2, left: 1 },
      { top: 2, left: 2 },
      { top: 2, left: 3 },
      { top: 2, left: 4 },
    ];

    console.log(nodes);

    positions.forEach((position, index) => {
      expect(nodes[index]).toEqual(
        jasmine.objectContaining(position)
      );
    });
  });

  it('generate nodes in rows randomly', () => {
    expect(
      generateNodes(3, 3)
    ).not.toEqual(
      generateNodes(3, 3)
    );
  });
});
