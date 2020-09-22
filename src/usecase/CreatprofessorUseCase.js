
class CreatprofessorUseCase {

    constructor(presenter, repository, professorDTO) {
        this.presenter = presenter
        this.repository = repository
        this.professorDTO = professorDTO
        this.collection = 'professors'
    }


    execute() {
        //validar os dados 
        //criptografia da senha
        //verifica se o usuário já existe
        this.save(this.professorDTO)
    }


    async save(professor) {
        try {
            const newprofessor = await this.repository.save(this.collection, professor)
            this.presenter.ok(newprofessor)
        } catch (fail) {
            console.log('CreatprofessorUseCase.save', fail)
        }
    }
}

module.exports = { CreatprofessorUseCase }