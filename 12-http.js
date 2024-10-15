const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to MY home page')
  } else if(req.url === '/about') {
    res.end('Here is MY short history')
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>I can't seem to understand how you are THIS STUPID</p>
      <a href="/">back where you belong</a>
    `)
    }
  
  
})

server.listen(5000)
