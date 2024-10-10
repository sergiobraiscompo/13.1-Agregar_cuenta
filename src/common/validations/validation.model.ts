export interface FieldValidationResult {
    succeeded: boolean;
    errorMessage?: string;
}

export interface FormValidationResult<T> {
    succeeded: boolean;
    errors: T;
}

export const accountTypes: string[] = [
    "Cuenta Corriente",
    "Ahorro",
]