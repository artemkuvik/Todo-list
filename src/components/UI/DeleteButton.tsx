import { TodoType } from "../../App";
import styles from "./AllDeleteButton.module.css";
import { MdDeleteForever } from "react-icons/md";

interface AllDeleteButtonProps {
  setList: React.Dispatch<React.SetStateAction<TodoType[]>>;
  completedCount: number;
  list: TodoType[];
}

export function DeleteButton({
  list,
  setList,
  completedCount,
}: AllDeleteButtonProps) {
  function restart() {
    setList(list.filter((todo) => todo.isActive === false));
  }
  return (
    <div
      className={completedCount ? styles.elem : styles["not-active-elem"]}
      onClick={restart}
    >
      <MdDeleteForever />
    </div>
  );
}
