import { AppState } from '../state/app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DataInterface } from 'src/app/interface/data-interface';

export const allUsersState = createFeatureSelector<AppState>('userData')

export const isLoader = createSelector(allUsersState, (state: AppState) => {
    console.log("Loding State:::", state.isLoading)
    return state.isLoading;
})

export const getAllUsersData = createSelector(allUsersState, (state: AppState) => {
    console.log("All Users Data:::", state.userData)
    return state.userData;
});

const allDataArray = []

export const getUserById = (userId) => createSelector(allUsersState, (allData: AppState): DataInterface[] => {
    console.log("In Selector:::", allData, userId)
    let filterDataArray = []
    if (allData.userData) {
        for (let i = 0; i < allData.userData.length; i++) {
            allDataArray.push(allData.userData[i])
            if (allData.userData[i].userId === userId) {
                filterDataArray.push(allDataArray[i])
            }
        }
        console.log("::::", allDataArray)

        console.log("In Selector:::", filterDataArray)
        return filterDataArray
    }
    else {
        return allData.userData;
    }
});