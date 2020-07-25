import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const values = value.split('/');
    const day = values[0];
    let month: string;

    switch(values[1])
    {
      case '1': month = "Enero"; break;
      case '2': month = "Febrero"; break;
      case '3': month = "Marzo"; break;
      case '4': month = "Abril"; break;
      case '5': month = "Mayo"; break;
      case '6': month = "Junio"; break;
      case '7': month = "Julio"; break;
      case '8': month = "Agosto"; break;
      case '9': month = "Septiembre"; break;
      case '10': month = "Octubre"; break;
      case '11': month = "Noviembre"; break;
      case '12': month = "Diciembre"; break;
    }
    return `${day} de ${month}`;
  }

}
