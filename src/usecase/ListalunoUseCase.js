

class ListalunoUseCase{


    constructor(presenter, repository) {
        this.presenter = presenter
        this.repository = repository
        this.collection = 'alunos'
    }


    async findAll(){
        try {
            const allalunos = await this.repository.find(this.collection, {})
            this.presenter.ok(allalunos)
        } catch (fail) {
            console.log('ListalunoUseCase.findAll', fail)
        }
    }

    async findById(alunoId){
        try {
            const aluno = await this.repository.findById(this.collection, alunoId)
            this.presenter.ok(aluno)
        } catch (fail) {
            console.log('ListalunoUseCase.findAll', fail)
        }
    }
    


}


module.exports = { ListalunoUseCase }