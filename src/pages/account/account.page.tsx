import React from "react";
import { AppLayout } from "@/layouts";
import { Account, createAccount } from "./api";
import classes from "./account.page.module.css"
import { AccountToCreateFormComponent } from "./components/account-form.component";
import { useParams } from "react-router-dom";

export const CreateAccountPage: React.FC = () => {
  const { account } = useParams<Account>();

  const handleAccount = () => {
    try {
      createAccount(account);
      alert("Cuenta creada con éxito.")
    } catch {
      alert("Error al crear la cuenta.");
    }
  }

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias Nacionales</h1>
        <AccountToCreateFormComponent
          accountData={account}
          onCreate={handleAccount}
          defaultAccount={account}
        />
      </div>
      <h1>Hello from create account</h1>
    </AppLayout>
  );
};
