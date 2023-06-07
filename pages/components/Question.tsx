import IQuestion from "@/interfaces/IQuestion";
import Input from "./Input";
import Choice from "./Choice";
import Form from "react-bootstrap/Form";

export default function Question({
  phase,
  question,
  disabled,
}: {
  phase: number;
  question: IQuestion;
  disabled: boolean;
}) {
  function saveChanges(id: string, value: string) {
    localStorage.setItem(id, value);
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={question.id}>{question.question}</Form.Label>
      {question.type === "short text" && (
        <Input
          disabled={disabled}
          saveChanges={saveChanges}
          question={question}
        />
      )}
      {question.type === "multiple choice" && (
        <Choice
          phase={phase}
          disabled={disabled}
          saveChanges={saveChanges}
          question={question}
          isInvalid={
            (phase === 2 &&
              question.correct &&
              question.correct !== localStorage.getItem(question.id)) ||
            false
          }
        />
      )}
      {phase === 1 ? (
        <Form.Control.Feedback type="invalid">
          This is a required question.
        </Form.Control.Feedback>
      ) : (
        <Form.Control.Feedback type="invalid">
          Incorrect answer!
        </Form.Control.Feedback>
      )}
      {phase === 2 && (
        <Form.Control.Feedback type="valid">
          Correct answer!
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}
