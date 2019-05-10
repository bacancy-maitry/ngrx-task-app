import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action } from "@ngrx/store";
import { AppService } from 'src/app/services/app.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as AllActions from '../actions/actions'
import { DataInterface } from 'src/app/interface/data-interface';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private appService: AppService) { }

  @Effect()
  getAllData$: Observable<Action> = this.actions$.pipe(
    ofType<AllActions.GetAllData>(
      AllActions.GET_ALL_DATA
    ),
    mergeMap((actions: AllActions.GetAllData) =>
      this.appService.getAllData().pipe(
        map(
          (userData: DataInterface[]) => {
            console.log("In Effects::", userData)
            return new AllActions.GetSuccessData(userData)
          }
        ),
      ))
  )
}