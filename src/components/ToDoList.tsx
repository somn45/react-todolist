import { useForm } from 'react-hook-form';

interface IForm {
  username: string;
  password1: number;
  password2: number;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onVaild = (data: IForm) => {
    if (data.password1 !== data.password2) {
      return setError('password1', {
        message: 'Password field and password confirmation field do not match',
      });
    }
    console.log(data);
  };
  const onInvaild = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onVaild, onInvaild)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <input
          type="text"
          placeholder="Write to do today!"
          defaultValue="hello"
          {...register('username', {
            required: true,
            minLength: {
              value: 5,
              message: 'User name must contain at least 5 characters',
            },
            validate: (value) => !value.includes('haku'),
          })}
        />
        <span>{errors.username && errors.username.message}</span>
        <input
          type="password"
          {...register('password1', {
            required: true,
          })}
        />
        <span>{errors.password1 && errors.password1.message}</span>
        <input
          type="password"
          {...register('password2', {
            required: true,
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ToDoList;
