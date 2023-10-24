import type { Response } from 'express'
import type { CustomResponseData, CustomResponseMessage, CustomResponseMessageError } from '../types/response'

// le damos a res: ...
enum HtttpStatus = {
    OK = 200
}


export const httpResponse = {
    OK:(res:CustomResponseData, data:any){
        return res.status(HtttpStatus.OK).json({
            status: HtttpStatus.OK,
            statusMsg: 'Success',
            data
        })
    }
}