import { Router } from 'express'
import { deleteBook, updateBook, createBook } from "../controllers/book"
import { schemaValidator } from "../middleware/schemaValidator"
import { getBook, getAllBooks, bodyBookSchema, idBookSchema, updateBooksSchema } from "../schemas/books"

const router = Router()

router.route('/')
    .get(getAllBooks)
    .post(schemaValidator(bodyBookSchema), createBook)

router.route('/:id')
    .get(getBook)
    .put(schemaValidator(updateBooksSchema), updateBook)
    .delete(schemaValidator(idBookSchema), deleteBook)

export { router }