import { atom, selector } from 'recoil';

export interface ITodo {
  text: string;
  category: 'TODO' | 'DOING' | 'DONE';
  id: number;
}

export const toDoState = atom<ITodo[]>({
  key: 'toDoState',
  default: [],
});

export const categoryState = atom({
  key: 'categoryState',
  default: 'TODO',
});

export const filteringCategory = selector({
  key: 'filteringCategory',
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === 'TODO'),
      toDos.filter((toDo) => toDo.category === 'DOING'),
      toDos.filter((toDo) => toDo.category === 'DONE'),
    ];
  },
});
