import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { toDoState } from '../atom';

interface IForm {
  toDo: string;
}
const initialState = {
  toDo: '',
};

function CreateToDo() {
  const { register, reset, handleSubmit } = useForm();
  const setToDos = useSetRecoilState(toDoState);
  const onVaild = ({ toDo }: IForm) => {
    setToDos((oldToDo) => [...oldToDo, { text: toDo, category: 'TODO', id: Date.now() }]);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <input
        placeholder="Please write a to do"
        {...register('toDo', {
          required: 'You should write to do',
        })}
      />
      <input type="submit" value="register" />
    </form>
  );
}

export default CreateToDo;
