export interface AccountVM {
    type: string;
    name: string;
}


export const createEmptyAccountVM = (): AccountVM => ({
    type: "",
    name: "",
})

export interface AccountError {
    type: string;
    name: string;
}

export const createEmptyAccountError = (): AccountError => ({
    type: "",
    name: "",
});