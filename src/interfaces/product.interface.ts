import {z} from "zod"

const typeProductSchema = z.object({
    name: z.string(),
    id: z.number(),
    description: z.string()
})

export const productSchema = z.object({
    id: z.number(),
    description: z.string(),
    name: z.string(),
    price: z.number(),
    quantity: z.string(),
    type: typeProductSchema
})

export type iProduct = z.infer<typeof productSchema>