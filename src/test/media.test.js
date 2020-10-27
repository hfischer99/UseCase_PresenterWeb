
const notaMedia = require('./media');

test('Calcula Media de Aluno', () => {
  expect(notaMedia(5, 5, 5, 5)).toBe(10);
});



