import * as commonApiModel from "./api"
import * as viewModel from "./account.vm"

export const mapAccountFromVmToApi = (account: viewModel.AccountVM): commonApiModel.Account => ({
    type: account.type,
    name: account.name,
})