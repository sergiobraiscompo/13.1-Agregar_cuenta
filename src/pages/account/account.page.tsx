import React from "react";
import { AppLayout } from "@/layouts";
import { saveAccount } from "./api";
import classes from "./account.page.module.css"
import { AccountToCreateFormComponent } from "./components/account-form.component";
import { useParams } from "react-router-dom";
import { AccountVM } from "./account.vm";
import { getAccountList } from "../account-list/api";
import { mapAccountFromApiToVm } from "./account.page.mapper";

export const CreateAccountPage: React.FC = () => {
  const { type, name } = useParams<{ type: string, name:string }>();
  const [ newAccount, setNewAccount ] = React.useState<AccountVM>();
  const [ accountList, setAccountList ] = React.useState<AccountVM[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) => {
      const accountListVm = result.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);

  const handleAccount = (accountData: AccountVM) => {
    if (type && name) {
      accountData = { type, name };
   
      saveAccount(accountData).then((result) => {
          if (result) {
            alert("Cuenta creada con éxito.")
          } else {
            alert("Ha ocurrido un error al crear la cuenta.")
          }
      })
    } else {
      alert("Ha ocurrido con los campos tipo de cuenta y alias")
    }
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias Nacionales</h1>
        <AccountToCreateFormComponent
          newAccount={newAccount}
          onCreate={handleAccount}
          defaultAccount={newAccount}
        />
      </div>
      <h1>Hello from create account</h1>
    </AppLayout>
  );
}
