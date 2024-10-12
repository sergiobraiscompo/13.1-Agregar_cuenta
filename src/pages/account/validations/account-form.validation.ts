import { FormValidationResult } from "@/common/validations";
import { AccountVM, AccountError } from "../account.vm";
import { validateNameField, validateTypeField } from "./account-field.validation";

export const validateForm = (account: AccountVM): FormValidationResult<AccountError> => {
    const fieldValidationResults = [
        validateTypeField(account.type),
        validateNameField(account.name),
    ]

    const formValidationResult: FormValidationResult<AccountError> = {
        succeeded: fieldValidationResults.every((f) => f.succeeded),
        errors: {
            type: fieldValidationResults[0].errorMessage ?? "",
            name: fieldValidationResults[1].errorMessage ?? "",
        }
    }

    console.log(formValidationResult)

    return formValidationResult;
}