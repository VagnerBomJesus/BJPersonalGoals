import fastify from 'fastify'

const app = fastify()

app
  .listen({
    port: 3000,
  })
  .then(server => {
    console.log('Http server running!')
  })
