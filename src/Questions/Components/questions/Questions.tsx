import "./Questions.css";

import questions from "../../dados";

import SingleQuestion from "../singleQuestion/SingleQuestion";

function Questions() {
  return (
    <div className="container">
      <br />
      <header>
        <h1>Questions</h1>
      </header>

      {questions.map((item) => {
        return <SingleQuestion {...item} />;
      })}
    </div>
  );
}

export default Questions;
