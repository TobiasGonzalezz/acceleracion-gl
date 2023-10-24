import type { BodyBookType, idBookType } from '../types/books'

const getBook = async (req: Request<idBookType>, _res: Response, next: NextFunction) => {
    try {
        const { params } = req
        const { id } = params
        const body = await bookService.getOne(id)
        return httpResponse.OK(res, book)
    } catch (error) {
        next(error)
    }
}
const createBook = async (req: Request<unknownm, unknown, BodyBookType>, _res: Response, next: NextFunction) => {
    try {
        const { body } = req
        const body = await bookService.create(body)
        return httpResponse.CREATED(res, book)
    } catch (error) {
        next(error)
    }
}

const updateBook = async (req: Request<idBookType, unknown, BodyBookType>, _res: Response, next: NextFunction) => {
    try {
        const { body, params } = req
        const { id } = params
        const body = await bookService.update(id)
        return httpResponse.OK(res, book)
    } catch (error) {
        next(error)
    }
}

const deleteBook = async (req: Request<idBookType>, _res: Response, next: NextFunction) => {
    try {
        const { params } = req
        const { id } = params
        const body = await bookService.delete(id)
        return httpResponse.OK(res, book)
    } catch (error) {
        next(error)
    }
}

export {
    getBook,
    updateBook,
    createBook,
    deleteBook
}