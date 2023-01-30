import './style.css';

import { scores, addScore } from './score.js';

const scoreList = document.querySelector('#score-list');

const addScoreToDom = (score) => {
  const li = document.createElement('li');
  li.textContent = `${score.name}: ${score.score}`;
  scoreList.appendChild(li);
};

const addScoreForm = document.querySelector('#add-score-form');

addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { name, score } = e.target.elements;
  addScore({ name: name.value, score: score.value });
  addScoreToDom({ name: name.value, score: score.value });
  e.target.reset();
});

scores.forEach(addScoreToDom);
