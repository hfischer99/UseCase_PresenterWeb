const filtro = require('./filtro')
const alunos = [{"nome": "paulo", "sobrenome": "camargo"}, {"nome": "matheus", "sobrenome": "camargo"}]

const encontrado = {"nome": "paulo", "sobrenome": "camargo"}

describe('Filtro', () => {
    test('Pesquisa de nome na base', () => {
        expect(filtro(alunos, "paulo")).toEqual(encontrado)
    })

    test('Pesquisa um nome que não existe na base', () =>{
        expect(filtro(alunos,"xpto")).toBeUndefined()
    });
});