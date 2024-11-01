import React from "react";
import { AppLayout } from "@/layouts";
import { saveAccount } from "./api";
import classes from "./account.page.module.css";
import { AccountToCreateFormComponent } from "./components/account-form.component";
import { AccountVM, createEmptyAccountVM } from "./account.vm";
import { mapAccountFromVmToApi } from "./account.page.mapper";

export const CreateAccountPage: React.FC = () => {
  const [newAccount, setNewAccount] = React.useState<AccountVM>(
    createEmptyAccountVM()
  );

  const handleAccount = () => {
      saveAccount(newAccount).then((result) => {
        if (result) {
          const accountVM = mapAccountFromVmToApi(newAccount);
          console.log(accountVM)
          setNewAccount(accountVM);
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
        <AccountToCreateFormComponent
          onCreate={handleAccount}
          newAccount={newAccount}
        />
      </div>
    </AppLayout>
  );
};
