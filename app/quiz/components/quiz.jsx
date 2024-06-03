import React, { useState, useEffect } from 'react';
import Timer from './timer';
import { questions } from './questions';
import LeaderboardNameEntry from './LeaderboardNameEntry';

const shuffleArray = (array) => {
  if (!array || array.length === 0) {
    return [];
  }
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    if (shuffled[i].hasOwnProperty('options')) {
      shuffled[i].options = shuffleArray(shuffled[i].options);
    }
  }
  return shuffled;
};

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectScore, setIncorrectScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [finishTime, setFinishTime] = useState(null);

  useEffect(() => {
    if (questions) {
      const shuffled = shuffleArray(questions);
      setShuffledQuestions(shuffled);
    }
  }, []);

  useEffect(() => {
    if (finishTime !== null && finishTime < 10) {
      resetQuiz();
    }
  }, [finishTime]);

  const checkAnswer = (option) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (option === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setIncorrectScore((prevIncorrectScore) => prevIncorrectScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIncorrectScore(0);
    setQuizStarted(false);
    setShuffledQuestions(shuffleArray(questions));
    setResetTimer(true);
    setFinishTime(null);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setResetTimer(false);
  };

  const updateFinishTime = (seconds) => {
    setFinishTime(seconds);
  };

  const renderScore = () => {
    const totalScore = (finishTime + incorrectScore * 2) - score * 2;

    return (
      <div>
        <p className='mb-2'>- Incorrect: {incorrectScore} <span className='text-sm'>x2</span></p>
        <p className='mb-2'>+ Correct: {score} <span className='text-sm'>x2</span></p>
        <div className='w-full flex justify-center items-center'>
              <div className='w-[75%] menu-background h-2 mb-2'></div>
              </div>
        <p className='mb-2 text-xl flex flex-col'>Final Result: <span className='text-green-400'>{totalScore}</span></p>
        <div className='w-full flex justify-center items-center'>
              <div className='w-[75%] menu-background h-2 mb-2'></div>
              </div>
        <LeaderboardNameEntry totalScore={totalScore} />
        <div className='w-full flex justify-center items-center'>
              <div className='w-[75%] menu-background h-2 mb-2'></div>
              </div>
        <button className="bg-white/40 hover:border-green-600 border-2 border-gray-600/0 text-white py-2 px-4 mt-4" onClick={resetQuiz}>Back to Start</button>
      </div>
    );
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className={`relative flex flex-col justify-center items-center text-center mt-20 bg-black/80 md:max-w-[50%] pr-2 pl-2 pt-5 pb-5`}>
      {quizStarted && (
        <div className='mb-2'>
          <Timer quizStarted={quizStarted} allQuestionsAsked={currentQuestionIndex >= shuffledQuestions.length} resetTimer={resetTimer} updateFinishTime={updateFinishTime} />
          
        </div>
      )}
      {quizStarted ? (
        <div id="question-box" className="text-xl">
          {currentQuestionIndex < shuffledQuestions.length ? (
            <div>
              <div className='w-full flex justify-center items-center'>
              <div className='w-[75%] menu-background h-2 mb-2'></div>
              </div>
              <p className='mb-4'>{currentQuestion.question}</p>
              <div className="grid grid-cols-2 gap-4 justify-center">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={`${currentQuestionIndex}-${index}`}
                    onClick={() => checkAnswer(option)}
                    className="bg-white/40 hover:border-green-600 border-2 border-gray-600/0 text-center p-2"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            renderScore()
          )}
        </div>
      ) : (
        <div>
          <h2 className='text-xl md:text-2xl font-bold mb-2'>The Quiz</h2>
          <p className='md:text-lg'>Welcome to the Dry Stone Walling Quiz! Just like walling, accuracy and speed are key. To reach the summit of the leaderboard, you'll need to answer questions correctly and quickly. 
          <br />
          Ready to test your knowledge? Hit "Begin" and let's go!</p>
          <button className="bg-white/40 md:text-lg hover:border-green-600 border-2 border-gray-600/0 text-white py-2 px-4 mt-4" onClick={startQuiz}>Begin</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
