import { useState } from "react";
import data from "../testdata.js";
import Categories from "./Categories.jsx";

const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);

  return (
    <div id={"app"}>
      What is Reactor 2?
      {/* Gameboard */}
      {/* Scoreboard */}
      {/* Response */}
    </div>
  );
};

export default App;
