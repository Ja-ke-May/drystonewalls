import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ quizStarted, allQuestionsAsked, resetTimer, updateFinishTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null); // Ref for the interval

  useEffect(() => {
    if (quizStarted && !allQuestionsAsked) {
      setIsActive(true); // Start the timer when the quiz starts and not all questions have been asked
    } else {
      setIsActive(false); // Pause the timer when all questions have been asked
    }

    return () => clearInterval(intervalRef.current);
  }, [quizStarted, allQuestionsAsked]);

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  useEffect(() => {
    // Listen for changes in the resetTimer prop
    if (resetTimer) {
      handleReset(); // If resetTimer changes, reset the timer
    }
  }, [resetTimer]);

  useEffect(() => {
    // Pass the finish time to the parent component
    if (allQuestionsAsked) {
      updateFinishTime(seconds);
    }
  }, [allQuestionsAsked, seconds, updateFinishTime]);

  return (
    <div>
      <h3 className='text-xl'>{seconds}</h3>
    </div>
  );
};

export default Timer;
