import {z} from 'zod'
import { productSchema } from './product.interface'
import { establishSchema } from './establish.interface'

const menuSchema = z.object({
    id: z.number(),
    product: productSchema.array(),
    establish: establishSchema
})

export type iMenu = z.infer<typeof menuSchema>