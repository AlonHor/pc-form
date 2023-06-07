import IQuestion from "@/interfaces/IQuestion";
import questions from "../../config/questions";
import Question from "./Question";

export default function Questions({
  phase,
  page,
  className,
  validated,
}: {
  phase: number;
  page: number;
  className?: string;
  validated: boolean;
}) {
  return (
    <div className={className}>
      <h1 className="mb-5">Questions:</h1>
      {questions.map((question: IQuestion) => {
        if (question.page === page || page === -1) {
          return (
            <Question
              phase={phase}
              disabled={validated}
              key={question.id}
              question={question}
            />
          );
        }
      })}
    </div>
  );
}
