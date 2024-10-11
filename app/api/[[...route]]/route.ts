import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().basePath('/api')

app.post('/generate', async (c) => {
  const { platform, topic, tone, additionalInfo } = await c.req.json()

  // In a real application, you would call an AI service here to generate the content.
  // For this example, we'll just return a mock response.
  const generatedContent = `Here's a ${tone} post for ${platform} about ${topic}:\n\n${additionalInfo}\n\n#AI #ContentGeneration`

  return c.json({ content: generatedContent })
})

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)