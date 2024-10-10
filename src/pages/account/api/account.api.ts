import Axios from "axios";
import { Account } from "./account.api-model";


export const createAccount = (account: Account) => {
    const newAccount: Account = { type: account.type, name: account.name };
    Axios.post<Account>(newAccount);
}