const products = [
{
    id: 1,
    descricao: 'coca-cola 2lts',
    valor: 10.00,
    qtde: 10
},
{
    id: 2,
    descricao: 'cereja',
    valor: 5.80,
    qtde: 50
},
{
    id: 3,
    descricao: 'agua',
    valor: 2.00,
    qtde: 5
},

]


module.exports = {
    async creatcart(request, response) {

        const{ id, descricao, valor, qtde } = request.body

        const existesproduct = products.find(product => product.id === id)
        console.log(existesproduct)
        if (existesproduct) {
            return response.status(400).json({
                Error: 'protudo ja cadastrado'

            })
        }

        request.body.id
        request.body.descricao

        products.push({
            id,
            descricao,
            valor,
            qtde
        })
    },
    async createcart(request, response) {
        return response.json({data: products })
     },

    async hello2(request, response) {
        return response.json({msg: 'hello world 2'})
     }
}