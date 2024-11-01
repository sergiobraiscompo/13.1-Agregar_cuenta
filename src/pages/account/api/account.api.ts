import Axios from "axios";
import { Account } from "./account.api-model";

const urlAccountList = `${import.meta.env.VITE_BASE_API_URL}/account-list`;
export const saveAccount = (account: Account): Promise<Account> => Axios.post<Account>(urlAccountList, account).then(({ data }) => data);
