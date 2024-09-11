import fastify from 'fastify'
import z from 'zod'
import { createGoal } from '../functions/create-gal'

const app = fastify()

app.post('/goals', async request => {
  // Implement createGoal logic here

  const createGoalScheme = z.object({
    title: z.string(),
    desiredWeeklyFrequency: z.number().int().min(1).max(7),
  })

  const body = createGoalScheme.parse(request.body)

  await createGoal({
    title: body.title,
    desiredWeeklyFrequency: body.desiredWeeklyFrequency,
  })
})

app
  .listen({
    port: 3000,
  })
  .then(server => {
    console.log('Http server running!')
  })
