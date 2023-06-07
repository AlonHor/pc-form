import IQuestion from "@/interfaces/IQuestion";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function Input({
  saveChanges,
  question,
  disabled,
}: {
  saveChanges: Function;
  question: IQuestion;
  disabled: boolean;
}) {
  useEffect(() => {
    setValue(localStorage.getItem(question.id) || "");
  }, []);

  const [value, setValue] = useState("");

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    saveChanges(question.id, e.target.value);
  }

  return (
    <Form.Control
      disabled={disabled}
      required
      type="text"
      name={question.id}
      id={question.id}
      value={value}
      onChange={changeValue}
    />
  );
}
