type ValidationFieldError = { field: string; message: string; };

export class ValidationError extends Error {
    constructor(public message: string, public fields: ValidationFieldError[]) {
        super(message)
        this.fields = fields;
    }
}