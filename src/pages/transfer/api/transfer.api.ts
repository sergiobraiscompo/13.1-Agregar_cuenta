import Axios from "axios";
import { Transfer } from "./transfer.api-model";

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`;
export const saveTransfer = (transfer: Transfer): Promise<boolean> => Axios.post<boolean>(urlTransfer, transfer).then(({ data }) => data);


