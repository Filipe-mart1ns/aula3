const express = require('express')

const app = express()

const PORT = 3333

app.use(express.json())

app.use('/hello', (request, response) => {
    return response.json({msg: 'hellow world' })

})

app.listen(PORT, () => {
    console.log(`filipe martins ${PORT}`)
})