import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// const ToDolist = () => {
//   const [toDo, setToDo] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// };
const ToDolist = () => {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register('email', { required: true })} placeholder="Email" />
        <input
          {...register('firstName', { required: true })}
          placeholder="First Name"
        />
        <input
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register('userName', { required: true, minLength: 10 })}
          placeholder="UserName"
        />
        <input
          {...register('password', { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register('password2', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'passowrd is too short',
            },
          })}
          placeholder="Password2"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDolist;
