import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paireToimpaire'
})
export class PaireToimpairePipe implements PipeTransform {

  transform(value: number): number {
    if(value % 2 != 0){
      //impaire
      return value;
    }else{
      return value+1;
    }
     ;
  }

}
