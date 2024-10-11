import * as apiModel from "./api"
import * as commonApiModel from "@/common/api"
import * as viewModel from "./transfer.vm"

export const mapAccountFromApiToVm = (account: commonApiModel.Account): viewModel.AccountVM => ({
    id: account.id,
    alias: account.name,
    iban: account.iban,
})

export const mapTransferFromVmToApi = (transfer: viewModel.TransferVM): apiModel.Transfer => ({
    accountId: transfer.accountId,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    transferDate: new Date().toDateString(),
    realTransferDate: transfer.realDateTransfer ?? "",

})

