import axios from "axios";

const baseURL = "https://timewise-backend.onrender.com";

const createApiClient = () => {
  return axios.create({
    baseURL: baseURL,
  });
};

export const postLeaderboardData = (data) => {
  const apiClient = createApiClient();
  return apiClient.post('/leaderboard', data);
};

export const getLeaderboardData = async (quizType, quizDate, dateQuizTaken) => {
  try {
    const apiClient = createApiClient();
    const response = await apiClient.get('/leaderboard', {
      params: { quizType, quizDate, dateQuizTaken }
    });

    // Sort the entries by totalScore in ascending order
    const sortedData = response.data.sort((a, b) => a.totalScore - b.totalScore);
    return { data: sortedData };
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};
