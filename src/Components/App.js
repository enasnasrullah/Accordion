import { useState } from "react";
import data from "./data";
import Question from "./Question";
const App = () => {
  const [questions, setQuestions] = useState(data);
  const renderdQuestions = questions.map((question) => {
    return <Question key={question.id} {...question} />;
  });
  return (
    <div className="container-question d-flex justify-content-center p-3 flex-column">
      <h3 className="text-center">questions and answers about login</h3>
      {renderdQuestions}
    </div>
  );
};

export default App;
