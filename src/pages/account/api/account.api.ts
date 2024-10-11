import Axios from "axios";
import { Account } from "./account.api-model";


const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;
export const getAccountList = (): Promise<Account[]> => Axios.get<Account[]>(urlAccount).then(({ data }) => data);

const accountUrl = `${import.meta.env.VITE_BASE_API_URL}/account`;
export const saveAccount = (account: Account): Promise<boolean> => Axios.post<boolean>(accountUrl, account).then(({ data }) => data);