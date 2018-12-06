import moveNodes, {
  TOP,
  LEFT,
  LEFT_TO_RIGHT,
  RIGHT_TO_LEFT,
} from '../moveNodes';

describe('services/moveNodes', () => {
  it('find mutation direction LEFT_TO_RIGHT in top align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: 3, },
      { top: 1, left: 1, value: null, },
      { top: 2, left: 0, value: 4, },
      { top: 2, left: 1, value: 5, },
    ];

    const {
      mutationDirection,
      mutationAlign,
      mutationLeftIndex,
      mutationRightIndex,
    } = moveNodes(nodes, nodes[2]);

    expect(mutationLeftIndex).toBe(0);
    expect(mutationRightIndex).toBe(1);
    expect(mutationAlign).toBe(TOP);
    expect(mutationDirection).toBe(LEFT_TO_RIGHT);
  });

  it('find mutation direction RIGHT_TO_LEFT in top align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: null, },
      { top: 1, left: 1, value: 3, },
      { top: 2, left: 0, value: 4, },
      { top: 2, left: 1, value: 5, },
    ];

    const {
      mutationDirection,
      mutationAlign,
      mutationLeftIndex,
      mutationRightIndex,
    } = moveNodes(nodes, nodes[3]);

    expect(mutationLeftIndex).toBe(0);
    expect(mutationRightIndex).toBe(1);
    expect(mutationAlign).toBe(TOP);
    expect(mutationDirection).toBe(RIGHT_TO_LEFT);
  });

  it('find mutation direction LEFT_TO_RIGHT in left align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: 3, },
      { top: 1, left: 1, value: null, },
      { top: 2, left: 0, value: 4, },
      { top: 2, left: 1, value: 5, },
    ];

    const {
      mutationDirection,
      mutationAlign,
      mutationLeftIndex,
      mutationRightIndex,
    } = moveNodes(nodes, nodes[1]);

    expect(mutationLeftIndex).toBe(0);
    expect(mutationRightIndex).toBe(1);
    expect(mutationAlign).toBe(LEFT);
    expect(mutationDirection).toBe(LEFT_TO_RIGHT);
  });

  it('find mutation direction RIGHT_TO_LEFT in left align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: null, },
      { top: 1, left: 1, value: 3, },
      { top: 2, left: 0, value: 4, },
      { top: 2, left: 1, value: 5, },
    ];

    const {
      mutationDirection,
      mutationAlign,
      mutationLeftIndex,
      mutationRightIndex,
    } = moveNodes(nodes, nodes[4]);

    expect(mutationLeftIndex).toBe(1);
    expect(mutationRightIndex).toBe(2);
    expect(mutationAlign).toBe(LEFT);
    expect(mutationDirection).toBe(RIGHT_TO_LEFT);
  });

  it('find existing breakNode in top align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: 3, },
      { top: 1, left: 1, value: 4, },
      { top: 2, left: 0, value: null, },
      { top: 2, left: 1, value: 5, },
    ];

    const { breakNode } = moveNodes(nodes, nodes[0]);
    expect(breakNode).toEqual(nodes[4]);
  });

  it('find existing breakNode in left align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: 3, },
      { top: 1, left: 1, value: null, },
      { top: 2, left: 0, value: 4, },
      { top: 2, left: 1, value: 5, },
    ];

    const { breakNode } = moveNodes(nodes, nodes[1]);
    expect(breakNode).toEqual(nodes[3]);
  });

  it('can\'t find not existing breakNode', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: 3, },
      { top: 1, left: 1, value: 4, },
      { top: 2, left: 0, value: 5, },
      { top: 2, left: 1, value: 6, },
    ];

    const { breakNode } = moveNodes(nodes, nodes[1]);
    expect(breakNode).toEqual(null);
  });

  it('detect mutation top align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: null, },
      { top: 1, left: 1, value: 4, },
      { top: 2, left: 0, value: 5, },
      { top: 2, left: 1, value: 6, },
    ];

    const { mutationAlign } = moveNodes(nodes, nodes[3]);
    expect(mutationAlign).toBe(TOP);
  });

  it('detect mutation left align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: 3, },
      { top: 1, left: 1, value: 4, },
      { top: 2, left: 0, value: 5, },
      { top: 2, left: 1, value: null, },
    ];

    const { mutationAlign } = moveNodes(nodes, nodes[1]);
    expect(mutationAlign).toBe(LEFT);
  });

  it('detect impossible mutation align', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 1, left: 0, value: 3, },
      { top: 1, left: 1, value: 4, },
      { top: 2, left: 0, value: 5, },
      { top: 2, left: 1, value: null, },
    ];

    const { mutationAlign } = moveNodes(nodes, nodes[0]);
    expect(mutationAlign).toBe(null);
  });

  it('move nodes align:top, direction:RIGHT_TO_LEFT', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 0, left: 2, value: 3, },
      { top: 0, left: 3, value: 4, },
      { top: 0, left: 4, value: 5, },
      { top: 1, left: 0, value: 6, },
      { top: 1, left: 1, value: 7, },    // <-- nextBreakNode
      { top: 1, left: 2, value: 8, },
      { top: 1, left: 3, value: null, }, // <-- breakNode
      { top: 1, left: 4, value: 9, },
      { top: 2, left: 0, value: 10, },
      { top: 2, left: 1, value: 11, },
      { top: 2, left: 2, value: 12, },
      { top: 2, left: 3, value: 13, },
      { top: 2, left: 4, value: 14, },
    ];

    const {
      nextNodes,
      mutableNodes,
      changedNodes,
      mutationAlign,
      mutationDirection,
    } = moveNodes(nodes, nodes[6]);

    expect(mutationAlign).toBe(TOP);
    expect(mutationDirection).toBe(LEFT_TO_RIGHT);

    expect(mutableNodes).toEqual([
      { top: 1, left: 1, value: 7, },
      { top: 1, left: 2, value: 8, },
      { top: 1, left: 3, value: null, },
    ]);

    expect(changedNodes).toEqual([
      { top: 1, left: 1, value: null, },
      { top: 1, left: 2, value: 7, },
      { top: 1, left: 3, value: 8, },
    ]);

    expect(nextNodes).toEqual([
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 0, left: 2, value: 3, },
      { top: 0, left: 3, value: 4, },
      { top: 0, left: 4, value: 5, },
      { top: 1, left: 0, value: 6, },
      { top: 1, left: 1, value: null, },
      { top: 1, left: 2, value: 7, },
      { top: 1, left: 3, value: 8, },
      { top: 1, left: 4, value: 9, },
      { top: 2, left: 0, value: 10, },
      { top: 2, left: 1, value: 11, },
      { top: 2, left: 2, value: 12, },
      { top: 2, left: 3, value: 13, },
      { top: 2, left: 4, value: 14, },
    ]);
  });

  it('move nodes align:top, direction:LEFT_TO_RIGHT', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 0, left: 2, value: 3, },
      { top: 0, left: 3, value: 4, },
      { top: 0, left: 4, value: 5, },
      { top: 1, left: 0, value: 6, },
      { top: 1, left: 1, value: null, }, // <-- breakNode
      { top: 1, left: 2, value: 7, },
      { top: 1, left: 3, value: 8, },    // <-- nextBreakNode
      { top: 1, left: 4, value: 9, },
      { top: 2, left: 0, value: 10, },
      { top: 2, left: 1, value: 11, },
      { top: 2, left: 2, value: 12, },
      { top: 2, left: 3, value: 13, },
      { top: 2, left: 4, value: 14, },
    ];

    const {
      nextNodes,
      mutableNodes,
      changedNodes,
      mutationAlign,
      mutationDirection,
    } = moveNodes(nodes, nodes[8]);

    expect(mutationAlign).toBe(TOP);

    expect(mutationDirection).toBe(RIGHT_TO_LEFT);

    expect(mutableNodes).toEqual([
      { top: 1, left: 1, value: null, },
      { top: 1, left: 2, value: 7, },
      { top: 1, left: 3, value: 8, },
    ]);

    expect(changedNodes).toEqual([
      { top: 1, left: 1, value: 7, },
      { top: 1, left: 2, value: 8, },
      { top: 1, left: 3, value: null, },
    ]);

    expect(nextNodes).toEqual([
      { top: 0, left: 0, value: 1, },
      { top: 0, left: 1, value: 2, },
      { top: 0, left: 2, value: 3, },
      { top: 0, left: 3, value: 4, },
      { top: 0, left: 4, value: 5, },
      { top: 1, left: 0, value: 6, },
      { top: 1, left: 1, value: 7, },
      { top: 1, left: 2, value: 8, },
      { top: 1, left: 3, value: null, },
      { top: 1, left: 4, value: 9, },
      { top: 2, left: 0, value: 10, },
      { top: 2, left: 1, value: 11, },
      { top: 2, left: 2, value: 12, },
      { top: 2, left: 3, value: 13, },
      { top: 2, left: 4, value: 14, },
    ]);
  });

  fit('move nodes align:left, direction:RIGHT_TO_LEFT', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 1, left: 0, value: 2, },
      { top: 2, left: 0, value: 3, },
      { top: 3, left: 0, value: 4, },
      { top: 4, left: 0, value: 5, },
      { top: 0, left: 1, value: 6, },
      { top: 1, left: 1, value: 7, },    // <-- nextBreakNode
      { top: 2, left: 1, value: 8, },
      { top: 3, left: 1, value: null, }, // <-- breakNode
      { top: 4, left: 1, value: 9, },
      { top: 0, left: 2, value: 10, },
      { top: 1, left: 2, value: 11, },
      { top: 2, left: 2, value: 12, },
      { top: 3, left: 2, value: 13, },
      { top: 4, left: 2, value: 14, },
    ];

    const {
      nextNodes,
      mutableNodes,
      changedNodes,
      mutationAlign,
      mutationDirection,
    } = moveNodes(nodes, nodes[6]);

    expect(mutationAlign).toBe(LEFT);

    expect(mutationDirection).toBe(LEFT_TO_RIGHT);

    expect(mutableNodes).toEqual([
      { top: 1, left: 1, value: 7, },
      { top: 2, left: 1, value: 8, },
      { top: 3, left: 1, value: null, },
    ]);

    expect(changedNodes).toEqual([
      { top: 1, left: 1, value: null, },
      { top: 2, left: 1, value: 7, },
      { top: 3, left: 1, value: 8, },
    ]);

    expect(nextNodes).toEqual([
      { top: 0, left: 0, value: 1, },
      { top: 1, left: 0, value: 2, },
      { top: 2, left: 0, value: 3, },
      { top: 3, left: 0, value: 4, },
      { top: 4, left: 0, value: 5, },
      { top: 0, left: 1, value: 6, },
      { top: 1, left: 1, value: null, },
      { top: 2, left: 1, value: 7, },
      { top: 3, left: 1, value: 8, },
      { top: 4, left: 1, value: 9, },
      { top: 0, left: 2, value: 10, },
      { top: 1, left: 2, value: 11, },
      { top: 2, left: 2, value: 12, },
      { top: 3, left: 2, value: 13, },
      { top: 4, left: 2, value: 14, },
    ]);
  });

  it('move nodes align:left, direction:LEFT_TO_RIGHT', () => {
    const nodes = [
      { top: 0, left: 0, value: 1, },
      { top: 1, left: 0, value: 2, },
      { top: 2, left: 0, value: 3, },
      { top: 3, left: 0, value: 4, },
      { top: 4, left: 0, value: 5, },
      { top: 0, left: 1, value: 6, },
      { top: 1, left: 1, value: null, }, // <-- breakNode
      { top: 2, left: 1, value: 7, },
      { top: 3, left: 1, value: 8, },    // <-- nextBreakNode
      { top: 4, left: 1, value: 9, },
      { top: 0, left: 2, value: 10, },
      { top: 1, left: 2, value: 11, },
      { top: 2, left: 2, value: 12, },
      { top: 3, left: 2, value: 13, },
      { top: 4, left: 2, value: 14, },
    ];

    const {
      nextNodes,
      mutableNodes,
      changedNodes,
      mutationAlign,
      mutationDirection,
    } = moveNodes(nodes, nodes[8]);

    expect(mutationAlign).toBe(LEFT);

    expect(mutationDirection).toBe(RIGHT_TO_LEFT);

    expect(mutableNodes).toEqual([
      { top: 1, left: 1, value: null, },
      { top: 2, left: 1, value: 7, },
      { top: 3, left: 1, value: 8, },
    ]);

    expect(changedNodes).toEqual([
      { top: 1, left: 1, value: 7, },
      { top: 2, left: 1, value: 8, },
      { top: 3, left: 1, value: null, },
    ]);

    expect(nextNodes).toEqual([
      { top: 0, left: 0, value: 1, },
      { top: 1, left: 0, value: 2, },
      { top: 2, left: 0, value: 3, },
      { top: 3, left: 0, value: 4, },
      { top: 4, left: 0, value: 5, },
      { top: 0, left: 1, value: 6, },
      { top: 1, left: 1, value: 7, },
      { top: 2, left: 1, value: 8, },
      { top: 3, left: 1, value: null, },
      { top: 4, left: 1, value: 9, },
      { top: 0, left: 2, value: 10, },
      { top: 1, left: 2, value: 11, },
      { top: 2, left: 2, value: 12, },
      { top: 3, left: 2, value: 13, },
      { top: 4, left: 2, value: 14, },
    ]);
  });
});
