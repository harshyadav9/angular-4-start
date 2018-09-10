import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { MessagingDataService } from './services/messaging-data.service';
import { grid } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   animations:  [
    trigger('animRoutes', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),

        // move page off screen right on leave
        query(':leave',
          animate('500ms ease-out',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})



export class AppComponent {
  title = 'app';
  totalGridData:grid[];
  itemsPerPage:number = 5;
  disableFlag:boolean=false;
  constructor(private dataService:MessagingDataService){
    
  }

  ngOnInit(){
    this.dataService.getCsv();
    this.dataService.getGridJSON<grid>().subscribe((data)=>{
      this.totalGridData = data;      
      console.log("this.totalGridData",this.totalGridData);
    });
  }
  getPage (outlet) {
    // console.log("outlet",outlet);
    // return outlet.activatedRouteData.page;
  }
}
