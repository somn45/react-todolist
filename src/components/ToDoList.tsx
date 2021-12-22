import { useRecoilValue } from 'recoil';
import { filteringCategory, toDoState } from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(filteringCategory);
  return (
    <div>
      <CreateToDo />
      <hr />
      <h2>To Do List</h2>
      <ul>
        {toDo.map((toDo) => (
          <li>
            <ToDo key={toDo.id} {...toDo} />
          </li>
        ))}
      </ul>
      <hr />
      <h2>Doing List</h2>
      <ul>
        {doing.map((toDo) => (
          <li>
            <ToDo key={toDo.id} {...toDo} />
          </li>
        ))}
      </ul>
      <hr />
      <h2>Done List</h2>
      <ul>
        {done.map((toDo) => (
          <li>
            <ToDo key={toDo.id} {...toDo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
