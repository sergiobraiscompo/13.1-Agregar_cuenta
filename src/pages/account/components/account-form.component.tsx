import React from "react";
import classes from "./account-form.component.module.css";
import { AccountError, createEmptyAccount, createEmptyAccountError } from "../account.vm";
import { Account } from "../api";
import { validateForm } from "../validations/account-form.validation";

interface Props {
    // newAccount: Account;
    onCreate: (accountInfo: Account) => void;
    defaultAccount?: Account;
}

export const AccountToCreateFormComponent: React.FC<Props> = (props) => {
    const { onCreate } = props;
    const [ accountData, setAccount ] = React.useState<Account>(
        createEmptyAccount()
    );

    const [ errors, setErrors ] = React.useState<AccountError> (
        createEmptyAccountError()
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValidationResult = validateForm(accountData);

        setErrors(formValidationResult.errors);

        if (formValidationResult.succeeded) {
            onCreate(accountData);
        }
    }

    const handleFieldChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setAccount({ ...accountData, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.formContainer}>
                <div>
                    <label>Tipo de cuenta:</label>
                    <select
                        name="type"
                        onChange={handleFieldChange}
                        value={accountData.type}
                        className={classes.large}
                    >
                        <option value="">Seleccionar</option>
                        <option value="">Ahorro</option>
                        <option value="">Cuenta Corriente</option>
                    </select>
                    <p className={classes.error}>{errors.type}</p>

                    <label>Alias:</label>
                    <input
                        name="name"
                        onChange={handleFieldChange}
                        value={accountData.name}
                        className={classes.large}
                    />
                    <p className={classes.error}>{errors.name}</p>
                </div>

                <button type="submit">Guardar</button>
            </div>
        </form>
    )
};