import './style.css';

import { getScores, addScore, createScoreEl } from './score.js';

const scoreList = document.querySelector('#score-list');
const addScoreForm = document.querySelector('#add-score-form');
const refreshBtn = document.querySelector('#refresh-btn');

const refreshScore = async () => {
  refreshBtn.disabled = true;

  const msgEl = document.createElement('p');
  msgEl.textContent = 'Fetching Scores from API...';
  msgEl.style.opacity = 0.5;

  scoreList.insertAdjacentElement('beforeBegin', msgEl);
  scoreList.innerHTML = '';

  const scores = await getScores();
  const scoreEL = scores.map(createScoreEl);
  scoreList.append(...scoreEL);

  msgEl.remove();

  refreshBtn.disabled = false;
};

refreshBtn.addEventListener('click', refreshScore);

addScoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { user, score } = e.target.elements;
  const newScore = { user: user.value, score: score.valueAsNumber };

  scoreList.scrollTop = 0;

  const submitBtn = e.target.querySelector('button');
  submitBtn.textContent = 'Submitting...';
  submitBtn.disabled = true;

  await addScore(newScore);

  const scoreEl = createScoreEl(newScore);
  scoreEl.classList.add('slide-in');
  scoreList.insertAdjacentElement('afterbegin', scoreEl);

  submitBtn.textContent = 'Submit';
  submitBtn.disabled = false;

  e.target.reset();
});

refreshScore();
