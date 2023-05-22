import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { toDoState, toDoSelector, categoryState } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDolist = () => {
  const toDos = useRecoilValue(toDoState);
  const todos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onChange={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      <ul>
        {todos?.map((item) => (
          <ToDo key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ToDolist;
