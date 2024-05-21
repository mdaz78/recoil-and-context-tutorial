import { atom } from "recoil";

// don't have conflicting keys

export const countAtom = atom({
  key: "count", // unique way to identify the atom
  default: 0, // initial value of the atom
});
