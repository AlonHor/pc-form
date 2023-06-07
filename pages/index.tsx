import React, { createRef, useState } from "react";
import Questions from "./components/Questions";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";

export default function Home() {
  const [activePage, setActivePage] = useState(1);
  const [validated, setValidated] = useState(false);
  const [phase, setPhase] = useState(1);
  const formRef = createRef<HTMLFormElement>();

  function nextPage() {
    setActivePage((ap) => ap + 1);
  }

  function previousPage() {
    setActivePage((ap) => ap - 1);
  }

  function attemptSubmitForm() {
    setActivePage(-1);
    if (formRef.current!.checkValidity()) {
      formRef.current!.requestSubmit();
      setPhase(2);
      setTimeout(() => {
        localStorage.clear();
      }, 1000);
    }
    setValidated(true);
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className="col-md-6 offset-md-3 col-sm-12 mb-3">
      <Form ref={formRef} validated={validated} onSubmit={submitForm}>
        <legend className="h1 text-center mb-5 mt-5">
          Police Constable Application
        </legend>
        <h5 className="mb-5">
          Apply to become a PC at PoliceMP.com If you feel like you may struggle
          with this form for whatever reason, please create a support ticket on{" "}
          <a href="https://discord.gg/policeMP">our discord</a>.
        </h5>
        <Questions
          phase={phase}
          validated={phase === 2}
          page={activePage}
          className="mb-5"
        />
        {activePage !== -1 && <p>Page: {activePage}/5</p>}
        {activePage > 1 && (
          <Button
            variant="secondary"
            type="button"
            className="me-3"
            onClick={previousPage}
          >
            Previous
          </Button>
        )}
        {activePage === -1 && phase === 1 ? (
          <Alert variant="danger" className="mb-5">
            Please fill out all questions before submitting.
          </Alert>
        ) : (
          <>
            {activePage < 5 && activePage !== -1 && (
              <Button
                variant="secondary"
                type="button"
                className="me-3"
                onClick={nextPage}
              >
                Next
              </Button>
            )}
          </>
        )}
        {phase === 2 ? (
          <Alert variant="success" className="mb-5">
            You have completed your application, please wait for a member of
            staff to review your application. You will be contacted via discord
            if you are successful.
          </Alert>
        ) : (
          <>
            {(activePage === 5 || activePage === -1) && (
              <Button
                variant="primary"
                type="submit"
                onClick={attemptSubmitForm}
              >
                Submit
              </Button>
            )}
          </>
        )}
      </Form>
    </div>
  );
}
