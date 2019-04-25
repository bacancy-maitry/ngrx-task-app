import { Action } from '@ngrx/store'
import { DataInterface } from 'src/app/interface/data-interface'

export const GET_ALL_DATA = 'Get_All_Data'
export const GET_SUCCESS_DATA = 'Get_Success_Data'
export const GET_FAIL_DATA = 'Get_Fail_Data'

export class GetAllData implements Action {
    readonly type = GET_ALL_DATA

    // constructor(public payload: DataInterface) { }
}

export class GetSuccessData implements Action {
    readonly type = GET_SUCCESS_DATA

    constructor(public payload: DataInterface[]) { }
}

export class GetFailData implements Action {
    readonly type = GET_FAIL_DATA

    constructor(public payload: string) { }
}

export type Actions = GetAllData | GetSuccessData | GetFailData