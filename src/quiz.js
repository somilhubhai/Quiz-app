import React, { useState } from "react";

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="relative">
      {showScore ? (
        <div className="font-bold text-xl">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="font-bold sm:text-2xl sm:">
            <div>
              <span>
                Question {currentQuestionIndex + 1}
                {")"}
              </span>
            </div>
            <div>{questions[currentQuestionIndex].question}</div>
          </div>
          <div className="mt-24 ">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                className="ml-16 mt-4 h-12 w-24 bg-rose-500 rounded-xl hover:bg-rose-600 hover:cursor-pointer text-gray-50"
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(
                    option === questions[currentQuestionIndex].answer
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
