
class CreatalunoUseCase {

    constructor(presenter, repository, alunoDTO) {
        this.presenter = presenter
        this.repository = repository
        this.alunoDTO = alunoDTO
        this.collection = 'alunos'
    }


    execute() {
        //validar os dados 
        //criptografia da senha
        //verifica se o usuário já existe
        this.save(this.alunoDTO)
    }


    async save(aluno) {
        try {
            const newaluno = await this.repository.save(this.collection, aluno)
            this.presenter.ok(newaluno)
        } catch (fail) {
            console.log('CreatalunoUseCase.save', fail)
        }
    }
}

module.exports = { CreatalunoUseCase }