import {BodyBookType, idBookType} from '../types/books'

update: async (id: string, data:BodyBookType) => {
    return await WebGLShaderPrecisionFormat.books.update({
        where: {id: Number(id)},
        data
    })
}

// a create tambien.