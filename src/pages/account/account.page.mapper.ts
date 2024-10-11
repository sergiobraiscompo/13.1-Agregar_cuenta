import * as commonApiModel from "@/common/api"
import * as viewModel from "./account.vm"

export const mapAccountFromApiToVm = (account: commonApiModel.Account): viewModel.AccountVM => ({
    type: account.iban,
    name: account.name,
})