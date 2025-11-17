import React, {useState, useEffect} from 'react';
import {questions} from "../data/questions";

function Quiz() {
    const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 sec timer
  const [isFinished, setIsFinished] = useState(false);

   useEffect(() => {
    if (timeLeft === 0) {
      handleNext(); // auto submit when timer ends
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    handleNext();
  };

  const handleNext = () => {
    setTimeLeft(30); // reset timer
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setIsFinished(true);
    }
  };

  const progress = ((current + 1) / questions.length) * 100;
  return (
    <div className="quiz-container">
      {!isFinished ? (
        <>
          <h3>Question {current + 1} / {questions.length}</h3>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>

          <p className="timer">⏳ Time Left: {timeLeft}s</p>

          <h2>{questions[current].question}</h2>

          <div className="options">
            {questions[current].options.map((opt, index) => (
              <button key={index} onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="result">
          <h2>Quiz Finished 🎉</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;