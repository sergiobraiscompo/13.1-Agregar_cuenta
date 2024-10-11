import { AccountVM } from "../account.vm";
import { vi } from "vitest";
import * as accountFieldValidation from "./account-field.validation";
import { validateForm } from "./account-form.validation";
import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";

describe("account-form.validation specs", () => {
    describe("validateForm", () => {
        it("should return true when all fields are correct", () => {
            // Arrange
            const account: AccountVM = {
                name: "Some Name",
                type: "ahorro",
            };

            vi.spyOn(accountFieldValidation, "validateNameField").mockReturnValue({ succeeded: true, });
            vi.spyOn(accountFieldValidation, "validateTypeField").mockReturnValue({ succeeded: true, });

            // Act
            const result = validateForm(account);

            // Assert
            expect(result.succeeded).toBeTruthy();
            expect(result.errors).toEqual({
                name: "",
                type: "",
            });
        });
    });

    describe("validateForm", () => {
        it("should return false when name field is empty", () => {
            // Arrange
            const account: AccountVM = {
                name: "",
                type: "ahorro",
            };

            vi.spyOn(accountFieldValidation, "validateTypeField").mockReturnValue({ succeeded: true, });
            vi.spyOn(accountFieldValidation, "validateNameField").mockReturnValue({ succeeded: false, errorMessage: REQUIRED_FIELD_MESSAGE});

            // Act
            const result = validateForm(account);

            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errors).toEqual({
                type: "",
                name: REQUIRED_FIELD_MESSAGE,
            });
        });
    });
});