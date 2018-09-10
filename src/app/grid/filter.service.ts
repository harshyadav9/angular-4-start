import { Injectable } from '@angular/core';
import { FilterDataPipe } from '../filter-data.pipe';
import { grid } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  componentData:grid[];
  headerData:string[] = [];
  constructor() { 
    
   
  }

  filterData(totalData , searchText , headerData){
   
    this.componentData = totalData;
    this.headerData  = headerData;
    return  this.componentData.filter(val=>{     
      if(!searchText) return this.componentData;      
      var flag = false;
      for(let i = 0;i<this.headerData.length;i++)
      {
          if(this.isString(val[this.headerData[i].toLowerCase()]))
          {
            if(val[this.headerData[i].toLowerCase()].indexOf(searchText) > -1)
            {
              flag = true;
              break;
            }  
          }

          else
          {
            if(val[this.headerData[i].toLowerCase()].toString().indexOf(searchText) > -1)
            {
              flag = true;
              break;
            } 
          }  
      }
      return flag;
    });
    
  }

  sortData(toatlGridData:grid[],direction:number,prop:string){
    let toatlGridSortData = toatlGridData;
    let propName = prop.toLowerCase();
    console.log(direction,propName);

      
        return toatlGridSortData.sort((a:grid,b:grid) => {
          let aData = a[propName];
          let bData = b[propName];
          
          if(this.isString(aData))
            aData = aData.trim().toUpperCase();

          if(this.isString(bData))
            bData = bData.trim().toUpperCase();

            console.log(aData,bData);
          if(aData < bData)
          {
            // clicked up arrow
            if(direction == -1)
              return -1;
            // clicked down arrow
            else
              return 1;
          }
            
          else if(aData == bData)
            return 0;

          
          else{
            // clicked down arrow
            if(direction == -1)
              return 1;
              // clicked down arrow
            else
              return -1;
            }
        }); 
        
  }

  isString(val:any):boolean{
    return (val && (val instanceof String || typeof(val) == 'string'))

  }
}