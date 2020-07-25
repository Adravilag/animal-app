import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personality'
})
export class PersonalityPipe implements PipeTransform {

  transform(personality: string, idioma: string): unknown {
    
    let value = "Unknow";
    
    if(idioma == 'es')
    {
      switch(personality)
      {
        case 'Cranky': value = "Picajoso"; break;
        case 'Jock': value = "Deportista"; break;
        case 'Uchi': value = "Familiar"; break;
        case 'Peppy': value = "Vivaracha"; break;
        case 'Snooty': value = "Altanera"; break;
        case 'Lazy': value = "Vago"; break;
        case 'Normal': value = "Normal"; break;
        case 'Smug': value = "Petulante"; break;
      }
    }
    return value;
  }  
}
