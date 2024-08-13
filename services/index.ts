import z from 'zod'

export const formSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string().email(),
  message: z.string().min(20).max(500),
})
