import type { Response } from 'express'

interface ResponseJsonBase {
    status: number,
    statusMsg: string,
}
interface ResponseJsonData extends ResponseJsonBase {
    data: any
}

interface ResponseJsonMenssage extends ResponseJsonBase {
    message: string
}

interface ResponseJsonMenssageError extends ResponseJsonBase {
    error: string
}

type Send<T = Response> = (body?: ResponseJsonData) => T
type SendMsg<T = Response> = (body?: ResponseJsonMenssage) => T
type SendMSgError<T = Response> = (body?: ResponseJsonMenssageError) => T

export interface CustomResponseData extends Response {
    json: Send<this>
}

export interface CustomResponseMessage extends Response {
    json: SendMsg<this>
}

export interface CustomResponseMessageError extends Response {
    json: SendMSgError<this>
}
