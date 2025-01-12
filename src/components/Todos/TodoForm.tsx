import styles from "./TodoForm.module.css";
import { Button } from "../UI/Button";
import { useState } from "react";

export interface TodoFormProps {
  add: (text: string) => void; // Функция, принимающая строку
}

export function TodoForm({ add }: TodoFormProps) {
  const [value, setValue] = useState<string>("");
  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    add(value);
    setValue("");
  }
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button />
    </form>
  );
}
