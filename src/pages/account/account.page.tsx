import React from "react";
import { AppLayout } from "@/layouts";
import { saveAccount } from "./api";
import classes from "./account.page.module.css";
import { AccountToCreateFormComponent } from "./components/account-form.component";
import { AccountVM } from "./account.vm";
import { mapAccountFromVmToApi } from "./account.page.mapper";

export const CreateAccountPage: React.FC = () => {
  const handleAccount = (accountInfo: AccountVM) => {
    console.log("Account in handle account", accountInfo);
    const account = mapAccountFromVmToApi(accountInfo);

    saveAccount(account).then((result) => {
      if (result) {
        alert("Cuenta creada con éxito.");
      } else {
        alert("Ha ocurrido un error al crear la cuenta.");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <AccountToCreateFormComponent onCreate={handleAccount} />
      </div>
    </AppLayout>
  );
};
