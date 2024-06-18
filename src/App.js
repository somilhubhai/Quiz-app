import React, { useState, useEffect } from "react";
import Quiz from "./quiz";
import quizData from "./data.json";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(Object.values(quizData.quiz));
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-200 to-indigo-200 h-full">
      <h1 className="font-bold h-8 text-center text-2xl sm:bg-transparent sm:text-3xl  ">
        Quiz App
      </h1>
      <div className="flex align-center shadow-xl justify-center mt-12 p-4 border-b-xl">
        <br />
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p>Loading questions</p>
        )}
      </div>
    </div>
  );
}

export default App;
