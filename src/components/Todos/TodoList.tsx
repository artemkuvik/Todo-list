import styles from "./TodoList.module.css";
import { Todo } from "./Todo";
import { TodoType } from "../../App";

export interface TodoListProps {
  list: TodoType[];
  setList: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export function TodoList({ list, setList }: TodoListProps) {
  if (list.length === 0) {
    return <div className={styles.empty}>Todo list is empty</div>;
  }
  return (
    <div className={styles.list}>
      {list.map((elem: TodoType) => {
        return (
          <Todo
            list={list}
            setList={setList}
            key={elem.id}
            id={elem.id}
            text={elem.text}
            isActive={elem.isActive}
          />
        );
      })}
    </div>
  );
}
