const testConexao = require('../entrypoint/express/startExpress');

test('teste conexao porta', () => {
    expect(testConexao()).toBe(3000);
});
