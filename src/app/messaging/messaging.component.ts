import { Component, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import { Observable, interval, of  } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User, AppId } from '../models/user';
import { MessagingDataService } from '../services/messaging-data.service';
import { ChildCompComponent } from '../child-comp/child-comp.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../services/loader.service';



@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  msgData:User[];
  mainData = [{"sqldata":"select * from ....121212","timestamp":new Date()},{"sqldata":"select * from ......","timestamp":new Date()}];
  commentData:string;
  interval$ = interval(2000);
  value$;
  modeldata;
  optionSelected:any;
  clients:string[] = ["AT&T","CISCO"];
  clientId:AppId[];
  @ViewChild(ChildCompComponent) child:ChildCompComponent;
  

  constructor(private messagingService:MessagingDataService,private dataService:MessagingDataService,private loader:LoaderService) {
    // this.modeldata = new User();
    // this.modeldata.id = 1;  
    this.dataService.getJSON<AppId>().subscribe((res:AppId[]) =>{
     this.clientId = res;
     console.log("clientId",this.clientId);
    });
    console.log("this.modeldata",this.modeldata);
   }

   
   ngAfterViewInit(){
     console.log("child",this.child);
     this.loader.hide();
   }

   onOptionsSelected(event:string){
     console.log("event",event);
   }

  

  getmessagesdata(){
    this.messagingService.getData().subscribe((data:User[])=>{
      this.msgData = data;
    });
    
  }

  ngOnInit():void {
      // this.http.get('/data.json').subscribe(res=>{
      //   console.log("data",res.json());
      // });
      this.value$ = of(1,2,3).pipe(map(n=>n*n));
      this.getmessagesdata();
     
    
  }
  assignData(listData:string){
    this.commentData = listData;
    //this.interval$.subscribe((data:number) => console.log(data));
    this.value$.subscribe((num:number) =>console.log("num",num));
  }

  addDataValue()
  {
    this.messagingService.addData(this.commentData);
  }
}
