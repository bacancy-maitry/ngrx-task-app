import { DataInterface } from 'src/app/interface/data-interface';
import * as UserActions from '../actions/actions'
import { AppState } from '../state/app.state';

export const defaultState: AppState = {
    userData: [],
    isLoading: false
}

export function userReducer(state: AppState[] = [defaultState], action: UserActions.Actions) {
    // console.log("In reducer:::", state)
    switch (action.type) {
        case UserActions.GET_ALL_DATA:
            return { ...state, isLoading: true }
        case UserActions.GET_SUCCESS_DATA:
            return { userData: action.payload, isLoading: false }
        default:
            return state;
    }
}