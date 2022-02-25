import Keys from './Keys.js';

const KeysActions = {
  Close: 0,
  CloseSelect: 1,
  First: 2,
  Last: 3,
  Next: 4,
  Open: 5,
  Previous: 6,
  Select: 7,
  Space: 8,
  Type: 9,
  Blur: 10,
  Left: 11,
  Right: 12,
};

const getActionFromKey = function(e, listboxOpen) {
  const { key } = e;

  if(!listboxOpen && (key === Keys.Enter || key === Keys.Space)) return KeysActions.Open;
  if (key === Keys.Down) return KeysActions.Next;
  if (key === Keys.Up) return KeysActions.Previous;
  if (key === Keys.Home) return KeysActions.First;
  if (key === Keys.End) return KeysActions.Last;
  if (key === Keys.Escape) return KeysActions.Close;
  if (key === Keys.Enter) return KeysActions.CloseSelect;
  if (key === Keys.Space) return KeysActions.Space;
  if (key === Keys.Tab) return KeysActions.Blur;
  if (key === Keys.Left) return KeysActions.Left;
  if (key === Keys.Right) return KeysActions.Right;
  return undefined;
};

const getUpdatedIndex = function (current, max, action) {
  switch(action) {
    case KeysActions.First:
      return 0;
    case KeysActions.Last:
      return max;
    case KeysActions.Previous:
    case KeysActions.Left:
      return Math.max(0, current - 1);
    case KeysActions.Next:
    case KeysActions.Right:
      return Math.min(max, current + 1);
    default:
      return current;
  }
};

export { KeysActions, getActionFromKey, getUpdatedIndex };
