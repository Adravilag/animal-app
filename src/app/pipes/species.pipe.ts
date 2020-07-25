import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'species'
})
export class SpeciesPipe implements PipeTransform {

  transform(specie: string, idioma: string): unknown {
    
    let value = "Unknow";
    
    if(idioma == 'es')
    {
      switch(specie)
      {
        case 'Alligator' : value = "Alligator"; break;
        case 'Anteater' : value = "Oso hormiguero"; break;
        case 'Bear' : value = "Oso"; break;
        case 'Bird' : value = "Pájaro"; break;
        case 'Bull' : value = "Toro"; break;
        case 'Cat' : value = "Gato"; break;
        case 'Chicken' : value = "Gallina"; break;
        case 'Cow' : value = "Vaca"; break;
        case 'Cub' : value = "Cachorro"; break;
        case 'Deer' : value = "Venado"; break;
        case 'Dog' : value = "Perro"; break;
        case 'Duck' : value = "Pato"; break;
        case 'Eagle' : value = "Águila"; break;
        case 'Elephant' : value = "Elefante"; break;
        case 'Frog' : value = "Rana"; break;
        case 'Goat' : value = "Cabra"; break;
        case 'Gorilla' : value = "Gorila"; break;
        case 'Hamster' : value = "Hamster"; break;
        case 'Hippo' : value = "Hipopótamo"; break;
        case 'Horse' : value = "Caballo"; break;
        case 'Kangaroo' : value = "Canguro"; break;
        case 'Koala' : value = "Koala"; break;
        case 'Lion' : value = "León"; break;
        case 'Monkey' : value = "Mono"; break;
        case 'Mouse' : value = "Ratón"; break;
        case 'Octopus' : value = "Pulpo"; break;
        case 'Ostrich' : value = "Avestruz"; break;
        case 'Penguin' : value = "Pingüino"; break;
        case 'Pig' : value = "Cerdo"; break;
        case 'Rabbit' : value = "Conejo"; break;
        case 'Rhino' : value = "Rinoceronte"; break;
        case 'Sheep' : value = "Oveja"; break;
        case 'Squirrel' : value = "Ardilla"; break;
        case 'Tiger' : value = "Tigre"; break;
        case 'Wolf' : value = "Lobo"; break;
      }
    }
    return value;
  }
}
