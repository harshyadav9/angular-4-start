import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../services/loader.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  her//o: User = {"username":"harsh yadav" , "password":"sathya@9999"};
  constructor(private route:ActivatedRoute,private router:Router,private loader:LoaderService) { 

    function generics<T,o>(args:T,name:o):T {
      return args;
    }
    generics('asas',1).length;
  }

  ngOnInit() {
    //let hello = Observable.of('hello');
    console.log(this.route.snapshot);
    this.myForm = new FormGroup({
      username:new FormControl(),
      password:new FormControl()      
      // password:new FormControl('' , {
      //   Validators
      // })
    });
    // this.loader.show();
  }

  callMessage(value){
    // console.log(this.formval);
    this.router.navigate(['/messaging']);
  }

 

}

