export interface I_Input {
    type: string,
    name: string,
    placeholder: string,
    autoComp: string,
}

export interface InputsList {
    type: string
    name: string
    placeholder: string
    autoComp: string
}

export interface IIinitialState  {
    message: null | string,
    success: null | string
}