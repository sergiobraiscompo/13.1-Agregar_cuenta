export interface Account {
    type: string;
    name: string;
}

export interface ApiAccount {
    id: string;
    iban: string;
    type: string;
    name: string;
    balance: number;
    lastTransaction: string;
}