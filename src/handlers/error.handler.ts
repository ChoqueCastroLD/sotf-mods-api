import { Elysia } from 'elysia'

import { ValidationError } from '../errors/validation'
import { UnauthorizedError } from '../errors/auth';


export const errorHandler = new Elysia()
    .addError({
        VALIDATION_ERROR: ValidationError,
        UNAUTHORIZED_ERROR: UnauthorizedError,
    })
    .onError(({ code, error, set }) => {
        console.error(error);
        switch(code) {
            case 'VALIDATION_ERROR':
                set.status = 400;
                return { code, error: error.message, fields: error.fields };
            case 'UNAUTHORIZED_ERROR':
                set.status = 401;
                return { code, error: error.message };
            case 'NOT_FOUND':
                set.status = 404;
                return { code, error: error.message };
            default:
                return { code, error: error.message };
        }
    })