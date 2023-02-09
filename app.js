const express = require ('express')
const path = require ('path')
const app = express ()


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

const port = 3000
app.listen(port, () => {
    console.log(`Servere started on http://localhost:${port}`)
})
