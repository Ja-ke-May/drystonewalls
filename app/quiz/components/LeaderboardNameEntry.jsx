import { useState, useEffect } from 'react';
import { postLeaderboardData, getLeaderboardData } from "@/apiClient";

const LeaderboardNameEntry = ({ totalScore }) => {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [allTimeUserPosition, setAllTimeUserPosition] = useState(null);
  const [dateQuizTaken, setDateQuizTaken] = useState('');
  const [refNumber, setRefNumber] = useState(null);
  const [displayedRefNumber, setDisplayedRefNumber] = useState(null);

  const quizStartDate = '03/06/24';
  const selectedQuizType = 'dry stone walls';

  const generateRefNumber = () => {
    return Math.floor(Math.random() * (1000000000 - 1000) + 1000);
  };

  const getCurrentDateInUKFormat = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const currentDate = getCurrentDateInUKFormat();
    setDateQuizTaken(currentDate);
    setRefNumber(generateRefNumber());
  }, []);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await getLeaderboardData(selectedQuizType, quizStartDate, dateQuizTaken);
        setLeaderboardData(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();
  }, [selectedQuizType, quizStartDate, dateQuizTaken, submitted]);

  const handleInputChange = (e) => {
    const inputText = e.target.value.replace(/[^A-Za-z0-9 ]/g, '').slice(0, 15);
    setUserName(inputText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEnterClick();
    }
  };

  const handleEnterClick = async () => {
    const currentDate = getCurrentDateInUKFormat();
    setDateQuizTaken(currentDate);

    const newRefNumber = generateRefNumber();
    setRefNumber(newRefNumber);

    const leaderboardData = {
      quizType: selectedQuizType,
      quizDate: quizStartDate,
      dateQuizTaken: currentDate,
      userName: userName,
      totalScore: totalScore,
      refNumber: newRefNumber,
    };

    setIsLoading(true);

    try {
      await postLeaderboardData(leaderboardData);
      setSubmitted(true);
      setDisplayedRefNumber(newRefNumber);

      const { data: allTime } = await getLeaderboardData(selectedQuizType, quizStartDate, dateQuizTaken);

      const userIndexAllTime = allTime.findIndex(entry => entry.userName === userName && entry.totalScore === totalScore);
      if (userIndexAllTime !== -1) {
        setAllTimeUserPosition(userIndexAllTime + 1);
      } else {
        setAllTimeUserPosition(null);
      }
    } catch (error) {
      console.error('Error submitting data to the database:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = isLoading || userName.trim() === '' || submitted;

  if (submitted) {
    return (
      <div className='m-2 text-xl text-center justify-center'>
        <p className='text-green-100'>REF: {displayedRefNumber}</p>
        <p>Leaderboard Position: {allTimeUserPosition}</p>
      </div>
    );
  }

  return (
    <div className='m-2 text-lg text-center justify-center'>
      <label>
        <input
          type="text"
          value={userName}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="m-2 p-2 border-2 border-green-600 text-center text-black text-xl"
          placeholder='Name for Leaderboard'
          maxLength={15}
          pattern="[A-Za-z0-9 ]*"
        />
      </label>
      <button
        onClick={handleEnterClick}
        disabled={isButtonDisabled}
        className="bg-black/10 border-2 border-green-600/50 hover:border-green-600 text-green-500 text-center px-3 py-2 m-2"
      >
        {isLoading ? 'Submitting...' : 'Enter'}
      </button>
    </div>
  );
};

export default LeaderboardNameEntry;
