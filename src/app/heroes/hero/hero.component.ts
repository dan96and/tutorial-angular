import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  //Lo trata como propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //Lo trata como metodo
  getHroDescription(): string {
    return this.name + ' - ' + this.age;
  }

  changeName(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm() {
    this.name = 'ironman';
    this.age = 45;
  }
}
