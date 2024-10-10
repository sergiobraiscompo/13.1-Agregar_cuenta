import { buildRequiredFieldValidationFailedResponse, buildValidationFailedResult, buildValidationSucceededResult, FieldValidationResult, INVALID_TYPE_MESSAGE, isAccountTypeCorrect, isStringValueInformed, isValueNotNullOrUndefined } from "@/common/validations";

export const validateNameField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }

    return buildValidationSucceededResult();
}

export const validatetypeField = (value: string): FieldValidationResult => {
    if (!isValueNotNullOrUndefined(value)) {
        return buildValidationSucceededResult();
    }

    if (value && !isAccountTypeCorrect(value)) {
        return buildValidationFailedResult(INVALID_TYPE_MESSAGE);
    }

    return buildValidationSucceededResult();
}