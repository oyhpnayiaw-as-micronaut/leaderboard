const gameId = '29cBKkcvADO2eJ5Tc14c';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const getScores = async () => {
  const res = await fetch(url);

  if (!res.ok) throw new Error('Error fetching scores');

  const data = await res.json();
  return data.result;
};

const addScore = async (newScore) => {
  if (!newScore.user || !newScore.score) throw new Error('Invalid score data');

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });

  if (!res.ok) throw new Error('Error adding score');

  return newScore;
};

const createScoreEl = (score) => {
  const li = document.createElement('li');
  li.textContent = `${score.user}: ${score.score}`;
  return li;
};

export { addScore, createScoreEl, getScores };
