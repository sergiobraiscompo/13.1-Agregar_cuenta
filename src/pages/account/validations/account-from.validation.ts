import { FormValidationResult } from "@/common/validations";
import { Account, AccountError } from "../account.vm";
import { validateNameField, validatetypeField } from "./account-field.validation";

export const validateForm = (account: Account): FormValidationResult<AccountError> => {
    const fieldValidationResults = [
        validateNameField(account.name),
        validatetypeField(account.type),
    ]

    const formValidationResult: FormValidationResult<AccountError> = {
        succeeded: fieldValidationResults.every((f) => f.succeeded),
        errors: {
            type: fieldValidationResults[0].errorMessage ?? "",
            name: fieldValidationResults[1].errorMessage ?? "",
        }
    }

    return formValidationResult;
}