import { TodoType } from "../../App";
import { MdOutlineRestartAlt } from "react-icons/md";
import styles from "./AllDeleteButton.module.css";

interface AllDeleteButtonProps {
  setList: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export function AllDeleteButton({ setList }: AllDeleteButtonProps) {
  function restart() {
    setList([]);
  }
  return (
    <div className={styles.elem} onClick={restart}>
      <MdOutlineRestartAlt />
    </div>
  );
}
