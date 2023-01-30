const scores = [
  { name: 'Foo', score: 50 },
  { name: 'Bar', score: 40 },
  { name: 'Baz', score: 70 },
];

const addScore = (newScore) => {
  scores.push(newScore);
};

export { scores, addScore };
