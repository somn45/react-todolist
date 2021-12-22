import { useRecoilState } from 'recoil';
import { ITodo, toDoState } from '../atom';

function ToDo({ text, category, id }: ITodo) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const currentIndex = oldToDos.findIndex((toDo) => {
        if (toDo.id === id) {
          return true;
        }
      });
      console.log(currentIndex);
      const newToDo = { text, category: name as any, id };
      const newToDos = [
        ...oldToDos.slice(0, currentIndex),
        newToDo,
        ...oldToDos.slice(currentIndex + 1, oldToDos.length),
      ];
      return newToDos;
    });
  };
  const [toDos, setToDos] = useRecoilState(toDoState);
  return (
    <div>
      <span>{text}</span>
      {category !== 'TODO' && (
        <button name="TODO" onClick={onClick}>
          TODO
        </button>
      )}
      {category !== 'DOING' && (
        <button name="DOING" onClick={onClick}>
          DOING
        </button>
      )}
      {category !== 'DONE' && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </div>
  );
}

export default ToDo;
