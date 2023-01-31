import './style.css';

import { getScores, addScore, createScoreEl } from './score.js';

const scoreList = document.querySelector('#score-list');
const addScoreForm = document.querySelector('#add-score-form');
const refreshBtn = document.querySelector('#refresh-btn');

const refreshScore = async () => {
  const scores = await getScores();
  const scoreEL = scores.map(createScoreEl);
  scoreList.append(...scoreEL);
};

refreshBtn.addEventListener('click', () => {
  scoreList.innerHTML = '';
  refreshScore();
});

addScoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { user, score } = e.target.elements;
  const newScore = { user: user.value, score: score.valueAsNumber };

  await addScore(newScore);
  const scoreEl = createScoreEl(newScore);

  scoreList.appendChild(scoreEl);
  e.target.reset();
});

refreshScore();
