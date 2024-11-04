import { buildRequiredFieldValidationFailedResponse, buildValidationFailedResult, buildValidationSucceededResult, FieldValidationResult, INVALID_TYPE_MESSAGE, isAccountTypeCorrect, isStringValueInformed, isValueNotNullOrUndefined } from "@/common/validations";

export const validateTypeField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }

    if (!isValueNotNullOrUndefined(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }

    if (value && !isAccountTypeCorrect(value)) {
        return buildValidationFailedResult(INVALID_TYPE_MESSAGE);
    }

    return buildValidationSucceededResult();
}

export const validateNameField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildRequiredFieldValidationFailedResponse();
    }

    return buildValidationSucceededResult();
}