const { CreatprofessorUseCase } = require('../../../usecase/CreatprofessorUseCase')
const { ListprofessorUseCase } = require('../../../usecase/ListprofessorUseCase')
const { PresenterWEB } = require('../../../presenter/PresenterWEB')
const { OperatorsDB } = require('../../../repository/mongoAtlas/OperatorsDB')

module.exports = app => {


    app.get('/professor', function (req, res) {
        // console.log('GET')
        const listprofessorUseCase = new ListprofessorUseCase(new PresenterWEB(res), new OperatorsDB())
        listprofessorUseCase.findAll()
    })

    app.get('/professor/:id', function (req, res) {
        // console.log('GET')
        const listprofessorUseCase = new ListprofessorUseCase(new PresenterWEB(res), new OperatorsDB())
        listprofessorUseCase.findById(req.params.id)
    })

    app.get('/professor/:name', function (req, res) {
        // console.log('GET')
        const listprofessorUseCase = new ListprofessorUseCase(new PresenterWEB(res), new OperatorsDB())
        listprofessorUseCase.findByName(req.params)
    })


    app.post('/professor', function (req, res) {
        // console.log('POST professor', req.body)
        new CreatprofessorUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute()
    })


    app.put('/professor', function (req, res) {
        res.send('Got a PUT request at /professor')
    })


    app.delete('/professor', function (req, res) {
        res.send('Got a DELETE request at /professor')
    })



}