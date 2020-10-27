const aprovacao = require('./aprovacao');

test('Verifica se aluno foi Aprovado', () => {
  expect(aprovacao(10)).toBeTruthy();
});