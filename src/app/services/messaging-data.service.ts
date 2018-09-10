import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { UsersData } from '../models/mock-data';
import { User, AppId } from '../models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { OptIn } from '../interfaces/optin';
import { error } from '@angular/compiler/src/util';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MessagingDataService {
  url:"https://jsonplaceholder.typicode.com/posts";
  
  constructor(private http:HttpClient ) { 
    
  }  
  messages:User[] = UsersData;
  getData(){
      return of(this.messages);
      // return this.http.get(this.url);
  };

  getCsv(){
    let url = "http://localhost:8084/spring-boot-jpa-demo/downloadusers";
    // const headers = new HttpHeaders()
    //   .append('Content-Type', 'text/csv');
        // .append('Accept', 'application/xml');
    // const options = new RequestOptions({headers: headers });
    this.http.get(url,{responseType:'blob'}).subscribe((data)=>{
     
     
      // var file = new File([data], "name");
      console.log(data);
      // var blob = new Blob([data], { type: 'application/*' });
     
      var url= window.URL.createObjectURL(data);  
      console.log(url);
      
      let linkElem = document.createElement("a");
      document.body.appendChild(linkElem);
      linkElem.setAttribute("style","display:none");
      
      linkElem.href = url;
      linkElem.download="harsh.csv";
      // console.log(linkElem);
      linkElem.click();     
      // window.open(url);
    },err=>{console.log("error",err)});
  }

  getmessages(){
    return this.http.get(this.url);
  }


  public getJSON<T>(): Observable<T[]> {
    return this.http.get<T[]>("data/data.json");
  }

  public getGridJSON<T>(): Observable<T[]> {
    return this.http.get<T[]>("data/grid.json");
  }

  addData(message:string):any{
    let id  = this.messages.length + 1;
    let obj = {"id":id,name:message};
    this.messages.push(obj);
  }

  extractData(res:Response){
    let jsonData =  res.json();
    return jsonData || {};
  }

  handleError(error:HttpErrorResponse){
    if(error.error instanceof Error)
    {
      const errMessage = error.error.message;
      return Observable.throw(errMessage); 
    }
    return Observable.throw(error || ' server error');
  }

  createParticipant(data:OptIn):Observable<OptIn>{
    let obj = {};
    obj["clientId"] = data.clientId;
    obj["mobileNumber"] = data.mobileNumber;
    obj["optInStatus"] = data.optInStatus;
    obj["participantId"] = data.participantId;
    const httpOptions = new HttpHeaders({'Content-Type':'application/json'});
    let formData:FormData = new FormData();
    formData.append('clientId',obj["clientId"]);
    formData.append('mobileNumber',obj["mobileNumber"]);
    formData.append('optInStatus',obj["optInStatus"]);
    formData.append('participantId',obj["participantId"]);
    // formData.append('clientId',);
    return this.http.post<OptIn>(this.url, formData)
    .pipe(
      map(res=>res),catchError(this.handleError));
    
  }

}
