import styles from "./Todo.module.css";
import { RiTodoLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import cn from "classnames";
import { TodoType } from "../../App";

export interface TodoTypeProps {
  text: string;
  id: string;
  isActive: boolean;
  list: TodoType[];
  setList: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export function Todo({ text, setList, id, isActive }: TodoTypeProps) {
  function deleteTask(id: string) {
    setList((prev) => prev.filter((item) => item.id !== id));
  }
  function completeTask(id: string) {
    setList((prev) =>
      prev.map((item) => {
        if (item.id === id && isActive === false) {
          return { ...item, isActive: true };
        }
        if (item.id === id && isActive === true) {
          return { ...item, isActive: false };
        } else return { ...item };
      })
    );
  }
  return (
    <div className={cn(styles["elem"], { [styles["elem-done"]]: isActive })}>
      <RiTodoLine />
      <div>{text}</div>
      <div className={styles.wrapper}>
        <MdDeleteForever
          className={styles.delete}
          onClick={() => deleteTask(id)}
        />
        <IoMdCheckmark
          className={styles.done}
          onClick={() => completeTask(id)}
        />
      </div>
    </div>
  );
}
