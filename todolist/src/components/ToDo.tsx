import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState, categories } from './atoms';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...prev.slice(0, targetIndex),
        newToDo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };
  const ondelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((prev) => {
      const filterTodo = prev.filter((item) => item.id !== id);

      return [...filterTodo];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== categories.DOING && (
        <button name={categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.TO_DO && (
        <button name={categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== categories.DONE && (
        <button name={categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={ondelete}>삭제</button>
    </li>
  );
};

export default ToDo;
