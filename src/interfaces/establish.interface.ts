import {z} from "zod"

export const establishSchema = z.object({
    email: z.string().email(),
    name:  z.string(),
    phone: z.string()
})

export type iEstablish = z.infer<typeof establishSchema>