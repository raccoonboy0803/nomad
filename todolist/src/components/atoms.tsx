import { v1 } from 'uuid'; //난수 생성
//atom key는 항상 고유값을 가져야하는데 재선언되는 과정에서 고질적인 에러 발생
import { atom, selector } from 'recoil';

// type categories = 'TO_DO' | 'DOING' | 'DONE';
export enum categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDo {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<categories>({
  key: 'category',
  default: categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: `toDo/${v1()}`,
  default: [],
});

export const toDoSelector = selector({
  key: `toDoSelector/${v1()}`,
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});
