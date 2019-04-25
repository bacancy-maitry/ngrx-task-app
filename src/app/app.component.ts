import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-task-app';

  // constructor(private appService: AppService) {
  //   this.appService.getAllData()
  //     .subscribe((response) => {
  //       console.log(response)
  //     })
  // }
  
}
