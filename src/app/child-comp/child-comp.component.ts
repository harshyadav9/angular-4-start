import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor() { }
  abc = 12;
  asas = 22323;
  main(){

  };
  
  ngOnInit() {
  }

}
