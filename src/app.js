const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/views', (req, res) => {
    let data = JSON.parse(fs.readFileSync('views.json'))
    data.views = +data.views + 1
    fs.writeFileSync('views.json', JSON.stringify(data))
    res.sendFile(path.join(__dirname, 'views.json'))
})

app.listen(port, () => {
    console.log(`Views server running on http://localhost:${port}`)
})