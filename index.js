const app = require('./server')
const {name, version} = require('./package.json')

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`${name} v${version} running on port ${port}`)
})
