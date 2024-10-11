export interface Transfer {
    accountId: string;
    iban: string;
    name: string;
    amount: number;
    concept: string;
    notes: string;
    transferDate: string;
    realTransferDate: string;
}