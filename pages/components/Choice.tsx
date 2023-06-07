import IQuestion from "@/interfaces/IQuestion";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function Choice({
  phase,
  saveChanges,
  question,
  disabled,
  isInvalid,
}: {
  phase: number;
  saveChanges: Function;
  question: IQuestion;
  disabled: boolean;
  isInvalid: boolean;
}) {
  useEffect(() => {
    setValue(localStorage.getItem(question.id) || "");
  }, []);

  const [value, setValue] = useState("");

  function changeValue(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
    saveChanges(question.id, e.target.value);
  }

  return (
    <Form.Select
      disabled={disabled}
      required
      id={question.id}
      value={value}
      onChange={changeValue}
      isInvalid={phase === 2 && isInvalid}
      isValid={phase === 2 && !isInvalid}
    >
      <option disabled value=""></option>
      {question.options!.map((choice: string, index: number) => {
        return (
          <option value={choice} key={index}>
            {choice}
          </option>
        );
      })}
    </Form.Select>
  );
}
