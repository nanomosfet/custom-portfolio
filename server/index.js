const express = require('express')
const app = express()

app.use(express.static('server/dist'))
app.get('/api', (req, res) => res.json({ somthing: 'hello' }))
app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
app.listen(3000, () => console.log('Example app listening on port 3000!' + __dirname))
