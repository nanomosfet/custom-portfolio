const app = require('./index.js')
const defaultPort = 3000
const portArgNum = 2
const appPort = process.argv[portArgNum] || defaultPort

app.listen(appPort, () => console.log(`Example app listening on port ${appPort}!`))
