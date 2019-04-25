import { DataInterface } from 'src/app/interface/data-interface';

export interface AppState{
    readonly userData: DataInterface[];
    readonly isLoading: boolean;
}