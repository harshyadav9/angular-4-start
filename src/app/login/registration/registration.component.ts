import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { trigger, state, style, query ,transition, animate, stagger } from '@angular/animations';
import { MessagingDataService } from '../../services/messaging-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations:[
    trigger('style',[
        state('hidden' , style({
          opacity:'0'
        })),
        state('notHidden' , style({
          opacity:'1'
        })),
        transition('hidden <=> notHidden',animate('3000ms ease-in'))
    ]),
       trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-400%)'}),
        animate('2000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('2000ms ease-in', style({transform: 'translateY(-400%)'}))
      ])
    ]),
    trigger('explainerAnim',[
      transition('* <=> *',[
        query('.col' , style({opacity:0 , transform:'translateX(-40px)'})),
        query('.col' ,stagger('1000ms',[animate('2000ms ease-out',style({opacity:1 , transform:'translateX(0px)'}))])),
        query('.col' , [animate(1000,style('*'))]),
      ])
    ]),
    trigger('listZoom',[
      state('active',style({transform:'scale(1.2)'})),
      state('inactive',style({transform:'scale(1)'})),
      transition('active <=> inactive',animate('100ms ease-in')),
      transition('inactive <=> active',animate('100ms ease-out'))
    ])
  ]

  // animations: [
  //   trigger('slideInOut', [
  //     transition(':enter', [
  //       style({transform: 'translateY(-400%)'}),
  //       animate('2000ms ease-in', style({transform: 'translateY(0%)'}))
  //     ]),
  //     transition(':leave', [
  //       animate('200ms ease-in', style({transform: 'translateY(-400%)'}))
  //     ])
  //   ])
  // ]
})
export class RegistrationComponent implements OnInit {
  animateState:string = 'hidden';
  listData:Array<string> = ['harsh','priya','garima'];
  state = 'inactive';
  show:boolean = false;
  complexForm:FormGroup;
  constructor(private router:Router,fb:FormBuilder,private messagingService:MessagingDataService) { 
    
    this.complexForm = fb.group({
      email:[null,Validators.required],
      mobileno:['' , Validators.compose([Validators.required , Validators.maxLength(10)])]
    })
  }

  ngOnInit() {
  }

  toggleState(){
    this.state = this.state === 'inactive'?'active':'inactive';
    console.log(this.state);
  }

  onSubmit(value){
    console.log(value);
    this.show = true;
  }

  onContinue(){
    // this.router.navigate(['/login']);
    this.animateState='notHidden';
    this.messagingService.getmessages().subscribe(data=>{
      console.log("data",data);
    });
  }

}
