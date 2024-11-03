import React from "react";
import classes from "./account-form.component.module.css";
import {
  AccountError,
  AccountVM,
  createEmptyAccountError,
  createEmptyAccountVM,
} from "../account.vm";
import { Account } from "../api";
import { validateForm } from "../validations/account-form.validation";
import { accountTypes } from "@/common/validations";

interface Props {
  onCreate: (accountInfo: Account) => void;
  defaultAccount?: Account;
}

export const AccountToCreateFormComponent: React.FC<Props> = (props) => {
  const { onCreate } = props;
  const [account, setAccount] = React.useState<AccountVM>(
    createEmptyAccountVM()
  );

  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyAccountError()
  );

  const handleCreateAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);

    if (formValidationResult.succeeded) {
      onCreate(account);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleCreateAccount}>
      <div className={classes.formContainer}>
        <div className={classes.typeSelectionContainer}>
          <label>Tipo de cuenta:</label>
          <select name="type" onChange={handleFieldChange} value={account.type}>
            <option value="">Seleccionar</option>

            {accountTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <p className={classes.error}>{errors.type}</p>
        </div>

        <div className={classes.nameInputContainer}>
          <label>Alias:</label>
          <input
            name="name"
            onChange={handleFieldChange}
            value={account.name}
          />
          <p className={classes.error}>{errors.name}</p>
        </div>
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
};
