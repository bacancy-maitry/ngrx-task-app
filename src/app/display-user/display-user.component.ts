import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataInterface } from '../interface/data-interface';
import { AppState } from '../store/state/app.state';
import { Observable } from 'rxjs';
import * as AllActions from '../store/actions/actions'
import * as selectors from '../store/selector/selector'

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  // userData$: Observable<DataInterface[]> = this.store.select((state) => state.userData)
  userData$: Array<DataInterface>
  userIdData$: Array<DataInterface>
  isDataById: boolean = false
  isLoading$: Observable<boolean>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getAllData()
  }

  getAllData() {
    console.log("Store Value::", this.store)
    this.isDataById = false;
    console.log("UserData$:::", this.userData$)

    this.store.dispatch(new AllActions.GetAllData());

    this.isLoading$ = this.store.select(selectors.isLoader)

    this.store.select(selectors.getAllUsersData)
      .subscribe((response) => {
        console.log("Userdata::",response)
        this.userData$ = response
      })
  }

  getDataById() {
    this.isDataById = true;
    this.store.select(selectors.getUserById(4))
      .subscribe((response) => {
        this.userIdData$ = response
        console.log("By Index Data:::", this.userIdData$)
      })
  }

}
