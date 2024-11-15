import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: IToDo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [
      { id: 1, text: "hello" },
      { id: 2, text: "hello" },
    ],
    Doing: [],
    Done: [],
  },
});

export const trashToDoState = atom<IToDoState>({
  key: "trashToDo",
  default: {
    Trash: [],
  },
});
