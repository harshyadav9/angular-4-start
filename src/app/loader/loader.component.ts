import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit,OnDestroy {

  constructor(private loaderService:LoaderService) { }
    @Input() show:boolean = false;

    ngOnInit(){
      this.loaderService._register(this);
    }
    
    ngOnDestroy():void{
      console.log("ng On Destroy is called for loader");
      this.loaderService._unregister(this);
    }

}
