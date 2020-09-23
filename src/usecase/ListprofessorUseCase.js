

class ListprofessorUseCase{


    constructor(presenter, repository) {
        this.presenter = presenter
        this.repository = repository
        this.collection = 'professors'
    }


    async findAll(){
        try {
            const allprofessors = await this.repository.find(this.collection, {})
            this.presenter.ok(allprofessors)
        } catch (fail) {
            console.log('ListprofessorUseCase.findAll', fail)
        }
    }

    async findById(professorId){
        try {
            const professor = await this.repository.findById(this.collection, professorId)
            this.presenter.ok(professor)
        } catch (fail) {
            console.log('ListprofessorUseCase.findAll', fail)
        }
    }

    async findByName(professorName){
        try {
            const professor = await this.repository.findByName(this.collection, professorName)
            this.presenter.ok(professor)
        } catch (fail) {
            console.log('ListprofessorUseCase.findAll', fail)
        }
    }


}


module.exports = { ListprofessorUseCase }