import type { z } from "zod"
import type {bodyBookSchema, idBookSchema} from '../schemas/books'

export type BodyBookType = z.infer<typeof bodyBookSchema>['body']

export type idBookType = z.infer<typeof idBookSchema>['params']