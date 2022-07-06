export function fixFirst(fn, arg) {
  return (...args) => fn(arg, ...args);
}

export const ItemTypes = {
  BLACKMAN: "BlackMan",
  WHITEKMAN: "WhiteMan",
  BLACKKING: "BlackKing",
  WHITEKING: "WhiteKing",

};
