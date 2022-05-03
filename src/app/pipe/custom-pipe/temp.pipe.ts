import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, unit:String){
      if(value && !isNaN(value)){
        if(unit === 'C'){
          var temp= (value-32)/1.8;
          return temp.toFixed(2)
        }
        else if (unit === 'F'){
          var temp= (value*1.8)+32;
          return temp.toFixed(2)
        }
      }

      return;
  }

}
