import React, { useState, useEffect } from 'react';
import { getLeaderboardData } from "@/apiClient";

const Leaderboard = ({ }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const quizStartDate = '03/06/24';
  const selectedQuizType = 'dry stone walls';

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await getLeaderboardData(selectedQuizType, quizStartDate);
        setLeaderboardData(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();

    const intervalId = setInterval(fetchLeaderboard, 5000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [selectedQuizType, quizStartDate]);


  return (
    <div id='leaderboard' className="leaderboard-container relative flex flex-col justify-center items-center text-center mt-20 bg-black/80 border border-white/40 pt-5 pb-5 md:max-w-[50%]">
     
      <h2 className="text-2xl font-bold mb-2">Leaderboard</h2>
      <div className='w-full flex justify-center items-center'>
              <div className='w-[75%] menu-background h-2 mb-4'></div>
              </div>
      
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
                  <th className="border border-white/40 px-4 py-2">#</th>
                  <th className="border border-white/40 px-4 py-2"> User </th>
                  <th className="border border-white/40 px-4 py-2"> Score </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => (
                  <tr key={entry.refNumber} className="mb-2">
                    <td className="border border-white/40 pb-2 pt-2">{index + 1}</td>
                    <td className="border border-white/40 pb-2 pt-2">{entry.userName}</td>
                    <td className="border border-white/40 pb-2 pt-2">{entry.totalScore}</td>
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
