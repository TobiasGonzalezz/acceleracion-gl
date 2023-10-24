import {z} from "zod"

// const mySchema = z.string()

// mySchema.parse("tuna") 
// // valida si lo que le paso cumple o no mi sistema de validacion
// mySchema.parse(12)
// // y si le paso otro valor me devuelve un Zoderror

// mySchema.safeParse("tuna")
// // como objeto mas lindo


// // const Book = z.object({
// //     username: z.string()
// // })


export const bodyBookSchema = z.object({
    body: z.object({
        title: z.string().min(1).max(255),
        author: z.string().min(1).max(255),
        genere: z.string().array().nonempty(),
        stock: z.number().int().nonnegative(),
    })
})

export const idBookSchema = z.object({
    params: z.object({
        id: z.string().regex(/^[0-9]+$/, "id must be a number")
    })
})

export const updateBooksSchema = z.object({
    body: bodyBookSchema.shape.body,
    params: idBookSchema.shape.params
})