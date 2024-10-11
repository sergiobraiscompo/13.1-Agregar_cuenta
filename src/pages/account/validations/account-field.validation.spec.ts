import { INVALID_TYPE_MESSAGE, REQUIRED_FIELD_MESSAGE } from "@/common/validations";
import { validateNameField, validateTypeField } from "./account-field.validation";


describe("account-field.validation specs", () => {
    
    describe("validateTypeField", () => {
        it("should return false when type field is empty", () => {
            // Arrange
            const value = "";

            // Act
            const result = validateNameField(value);

            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
        });

        it("should return false when type is well formed but is not in accountTypes", () => {
            // Arrange
            const value = "accounttoadd";
            
            // Act
            const result = validateTypeField(value);
            
            // Assert
            expect(result.succeeded).toBeFalsy();
            expect(result.errorMessage).toEqual(INVALID_TYPE_MESSAGE);
        });
        
        it("should return true when type is well formed and is in accountTypes", () => {
            // Arrange
            const value = "Cuenta Corriente";
            
            // Act
            const result = validateTypeField(value);
            
            // Assert
            expect(result.succeeded).toBeTruthy();
        });
        
        describe("validateNameField", () => {
            it("should return false when name is not informed", () => {
                // Arrange
                const value = "";
    
                // Act
                const result = validateNameField(value);
    
                // Assert
                expect(result.succeeded).toBeFalsy();
                expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
            });
    
            it("should return true when name is well formed", () => {
                // Arrange
                const value = "accounttoadd";
    
                // Act
                const result = validateNameField(value);
    
                // Assert
                expect(result.succeeded).toBeTruthy();
            });
        });

    });
});