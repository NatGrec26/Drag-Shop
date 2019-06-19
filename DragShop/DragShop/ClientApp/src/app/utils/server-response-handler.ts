import { HttpErrorResponse } from '@angular/common/http';

export const InternalServerErrorMessage = 'Ha ocurrido un error. Favor intentar nuevamente.';

export interface ServerResponseHandler {
    cssClass: string;
    message: string;
    status?: number;
    success: boolean;
}

export function createdBadRequestErrorResponse(message: string = 'Datos ingresados incorrectamente.'): ServerResponseHandler {
    return createServerResponseHandler(message, false, 400, 'error');
}

export function createdNotFoundErrorResponse(message: string = 'Datos no encontrados.'): ServerResponseHandler {
    return createServerResponseHandler(message, false, 404, 'error');
}


export function createdUnauthorizedRequestErrorResponse(message: string = 'No autorizado'): ServerResponseHandler {
    return createServerResponseHandler(message, false, 401, 'error');
}

export function createGenericErrorResponse(): ServerResponseHandler {
    return createServerResponseHandler('Ha ocurrido un error. Favor intentar nuevamente.',
        false, null, 'error');
}

export function createInternalServerErrorResponse(): ServerResponseHandler {
    return createServerResponseHandler(InternalServerErrorMessage, false, 500, 'error');
}

export function createServerResponseHandler(
    message: string,
    success: boolean,
    status: number,
    cssClass: string = 'success'
): ServerResponseHandler {
    return {
        cssClass,
        message,
        status,
        success
    };
}

export function createSuccessResponse(message: string = 'Datos procesados correctamente.', status: number): ServerResponseHandler {
    return createServerResponseHandler(message, true, status, 'success');
}

export function handleDefaultHttpError(httpErrorResponse: HttpErrorResponse): ServerResponseHandler {
    if (httpErrorResponse.status === 400) {
        return createdBadRequestErrorResponse();
    } else if (httpErrorResponse.status === 500) {
        return createInternalServerErrorResponse();
    } else if (httpErrorResponse.status === 401) {
        return createdUnauthorizedRequestErrorResponse();
    } else if (httpErrorResponse.status === 401) {
        return createdNotFoundErrorResponse();
    } else {
        return createGenericErrorResponse();
    }
}


