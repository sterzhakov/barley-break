import isWinningNodes from '../isWinningNodes';

describe('services/isWinningNodes', () => {
  it('winner combination', () => {
    expect(
      isWinningNodes([
        { top: 0, left: 0, value: 1, },
        { top: 0, left: 1, value: 2, },
        { top: 0, left: 2, value: 3, },
        { top: 1, left: 0, value: 4, },
        { top: 1, left: 1, value: null, },
        { top: 1, left: 2, value: 5, },
        { top: 2, left: 0, value: 6, },
        { top: 2, left: 1, value: 7, },
        { top: 2, left: 2, value: 8, },
      ])
    ).toBeTruthy();
  });

  it('loosing combination 1', () => {
    expect(
      isWinningNodes([
        { top: 0, left: 0, value: 1, },
        { top: 0, left: 1, value: 2, },
        { top: 0, left: 2, value: 3, },
        { top: 1, left: 0, value: null, },
        { top: 1, left: 1, value: 5, },
        { top: 1, left: 2, value: 4, },
        { top: 2, left: 0, value: 6, },
        { top: 2, left: 1, value: 7, },
        { top: 2, left: 2, value: 8, },
      ])
    ).toBeFalsy();
  });

  it('loosing combination 2', () => {
    expect(
      isWinningNodes([
        { top: 0, left: 0, value: 1, },
        { top: 0, left: 1, value: 2, },
        { top: 0, left: 2, value: 3, },
        { top: 1, left: 0, value: 4, },
        { top: 1, left: 1, value: 7, },
        { top: 1, left: 2, value: null, },
        { top: 2, left: 0, value: 5, },
        { top: 2, left: 1, value: 8, },
        { top: 2, left: 2, value: 9, },
      ])
    ).toBeFalsy();
  });
});
