import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {
  
  transform(values: any, value:any,propdata:string): any { 
    
    return values.filter(val=>{     
      if(!value) return values;      
      var flag = false;
      for(let i = 0;i<propdata.length;i++)
      {
          if(this.isString(val[propdata[i].toLowerCase()]))
          {
            if(val[propdata[i].toLowerCase()].indexOf(value) > -1)
            {
              flag = true;
              break;
            }  
          }

          else
          {
            if(val[propdata[i].toLowerCase()].toString().indexOf(value) > -1)
            {
              flag = true;
              break;
            } 
          }  
      }
      return flag;
    });


  }

   // Check for string
   isString(val:any):boolean{
    return (val && (val instanceof String || typeof(val) == 'string'))
    }

}
