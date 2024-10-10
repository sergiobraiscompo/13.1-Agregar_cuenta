import React from "react";
import { Account } from "../account.vm";
import { validateForm } from "../validations";
import classes from "./create-account-form.component.module.css";
import { AccountError, createEmptyAccount, createEmptyAccountError } from "../account.vm";

interface Props {
    accountData: Account
    onCreate: (accountInfo: Account) => void;
    defaultAccount: Account
}

export const AccountToCreateFormComponent: React.FC<Props> = (props) => {
    const { accountData, onCreate } = props;
    const [ account, setAccount ] = React.useState<Account>(
        createEmptyAccount()
    );

    const [ errors, setErrors ] = React.useState<AccountError> (
        createEmptyAccountError()
    );

    // React.useEffect(() => {
    //     if(defaultAccountId) {
    //         setTransfer((prevTransfer) => ({
    //             ...prevTransfer,
    //             accountId: defaultAccountId,
    //         }))
    //     }
    // }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValidationResult = validateForm(accountData);

        setErrors(formValidationResult.errors);

        if (formValidationResult.succeeded) {
            onCreate(account);
        }
    }

    const handleFieldChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.formContainer}>
                <div>
                    <label>Tipo de cuenta:</label>
                    <select
                        name="type"
                        onChange={handleFieldChange}
                        value={account.type}
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
                        value={account.name}
                        className={classes.large}
                    />
                    <p className={classes.error}>{errors.name}</p>
                </div>
            </div>
        </form>
    )
};