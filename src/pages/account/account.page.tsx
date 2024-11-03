import React from "react";
import { AppLayout } from "@/layouts";
import { saveAccount } from "./api";
import classes from "./account.page.module.css";
import { AccountToCreateFormComponent } from "./components/account-form.component";
import { AccountVM, createEmptyAccountVM } from "./account.vm";
import { mapAccountFromVmToApi } from "./account.page.mapper";

export const CreateAccountPage: React.FC = () => {
  const [account, setAccount] = React.useState<AccountVM>(
    createEmptyAccountVM()
  );

  const handleAccount = () => {
      saveAccount(account).then((result) => {
        if (result) {
          const accountVM = mapAccountFromVmToApi(account);
          console.log(accountVM)
          setAccount(accountVM);
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
          defaultAccount={account}
        />
      </div>
    </AppLayout>
  );
};
