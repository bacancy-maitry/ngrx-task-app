import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { DataInterface } from 'src/app/interface/data-interface';

export const allUsersState = (state: AppState) => state.userData

export const isLoader = () => createSelector(allUsersState, (loadingState) => {
    console.log("Loding State:::",loadingState)    
    return loadingState;
})

export const getAllUsersData = () => createSelector(allUsersState, (allUsersData) => {
    console.log("All Users Data:::",allUsersData)
    return allUsersData;
});

const allDataArray = []

export const getUserById = (userId) => createSelector(allUsersState, (allData): DataInterface[] => {
    console.log("In Selector:::", allData)
    let filterDataArray = []
    if (allData) {
        // for (let i = 0; i < allData.userData.length; i++) {
        //     allDataArray.push(allData.userData[i])
        //     if (allData.userData[i].userId === userId) {
        //         filterDataArray.push(allDataArray[i])
        //     }
        // }
        console.log("::::", allDataArray)

        console.log("In Selector:::", filterDataArray)
        return filterDataArray
    }
    else {
        return allData;
    }
});