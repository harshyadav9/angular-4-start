import { Injectable } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // usage of sets in the services
  private loader = new Set<LoaderComponent>();
   
  _register(loaderVal:LoaderComponent):void{
    this.loader.add(loaderVal);
    console.log("this.loader",this.loader);
  };

 _unregister(loaderToRemove:LoaderComponent):void{
    this.loader.delete(loaderToRemove);
  };   

  show():void{
    this.loader.forEach(value=>{value.show = true});
  };

  hide():void{
    this.loader.forEach(value=>{value.show = false});
  };

  constructor() { }
}
