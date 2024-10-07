import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {



  persons: Persona[] = [
    { name: 'John', age: 25, photo: 'https://www.clarin.com/2024/04/25/HKCtyMwSF_2000x1500__1.jpg' },
    { name: 'Jane', age: 22, photo: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
    { name: 'Jim', age: 17, photo: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
    { name: 'Jill', age: 15, photo: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
    { name: 'Jack', age: 40, photo: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
    { name: 'Jenny', age: 12, photo: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' }
  ]
  condition: string[] = ['','','','','',''];

  checkAge(i:number) {
    /*const age = this.persons[i].age;*/
    /*this.condition[i] = age >= 18 ? 'Es mayor de edad' : 'Es menor de edad';*/
  }
    resultado:string='';
    index:number=0;
  checkAge2(age:number,i:number) {

    this.resultado = age >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
    this.index = i;

  }


  checkAge3(persona:Persona, i:number) {
    const age = persona.age;
    this.condition[i] = age >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
  }

}

interface Persona{ name: string, age: number, photo: string }
