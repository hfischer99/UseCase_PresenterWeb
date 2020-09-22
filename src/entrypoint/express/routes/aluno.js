const { CreatalunoUseCase } = require('../../../usecase/CreatalunoUseCase')
const { ListalunoUseCase } = require('../../../usecase/ListalunoUseCase')
const { PresenterWEB } = require('../../../presenter/PresenterWEB')
const { OperatorsDB } = require('../../../repository/mongoAtlas/OperatorsDB')

module.exports = app => {


    app.get('/aluno', function (req, res) {
        // console.log('GET')
        const listalunoUseCase = new ListalunoUseCase(new PresenterWEB(res), new OperatorsDB())
        listalunoUseCase.findAll()
    })

    app.get('/aluno/:id', function (req, res) {
        // console.log('GET')
        const listalunoUseCase = new ListalunoUseCase(new PresenterWEB(res), new OperatorsDB())
        listalunoUseCase.findById(req.params.id)
    })


    app.post('/aluno', function (req, res) {
        // console.log('POST aluno', req.body)
        new CreatalunoUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute()
    })


    app.put('/aluno', function (req, res) {
        res.send('Got a PUT request at /aluno')
    })


    app.delete('/aluno', function (req, res) {
        res.send('Got a DELETE request at /aluno')
    })



}