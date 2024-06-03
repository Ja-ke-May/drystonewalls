import React, { useState, useEffect } from 'react';
import { getLeaderboardData } from "@/apiClient";

const Leaderboard = ({ }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const quizStartDate = '03/06/24';
  const selectedQuizType = 'dry stone walls';
  const dateQuizTaken = '03/06/24';

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await getLeaderboardData(selectedQuizType, quizStartDate, dateQuizTaken);
        setLeaderboardData(response.data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();

    const intervalId = setInterval(fetchLeaderboard, 5000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [selectedQuizType, quizStartDate, dateQuizTaken]);


  return (
    <div className="leaderboard-container relative flex flex-col justify-center items-center text-center mt-20 ml-5 mr-5 bg-black/80 p-5 md:max-w-[50%]">
     
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className='w-full h-2 mb-4 menu-background'></div>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="leaderboard">
          {leaderboardData.length === 0 ? (
            <p>No entries yet.</p>
          ) : (
            <table className="max-w-full mx-auto">
              <thead>
                <tr>
                  <th className="border border-white px-4 py-2">#</th>
                  <th className="border border-white px-4 py-2"> User </th>
                  <th className="border border-white px-4 py-2"> Score </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => (
                  <tr key={entry.refNumber} className="mb-2">
                    <td className="border border-white pb-2 pt-2">{index + 1}</td>
                    <td className="border border-white pb-2 pt-2">{entry.userName}</td>
                    <td className="border border-white pb-2 pt-2">{entry.totalScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
