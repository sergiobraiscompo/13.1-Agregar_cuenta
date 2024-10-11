import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVM, TransferVM } from "./transfer.vm";
import { TransferFormComponent } from "./components/transfer-form.component";
import classes from "./transfer.page.module.css";
import { saveTransfer } from "./api";
import { mapAccountFromApiToVm, mapTransferFromVmToApi } from "./transfer.mapper";
import { useParams } from "react-router-dom";
import { getAccountList } from "@/common/api";

export const TransferPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ accountList, setAccountList ] = React.useState<AccountVM[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) => {
      const accountListVm = result.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVM) => {
    const transfer = mapTransferFromVmToApi(transferInfo);

    saveTransfer(transfer).then((result) => {
      if (result) {
        alert("Transferencia realizada con éxito.")
      } else {
        alert("Error al realizar la transferencia.");
      }
    })
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias Nacionales</h1>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId={id}
        />
      </div>
    </AppLayout>
  );
};
