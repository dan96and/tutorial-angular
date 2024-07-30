import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Thor', 'Ironman', 'Hulk', 'She Hulk'];
  public lastHeroDelete? : string;

  removeLastHero():void{
    this.lastHeroDelete = this.heroNames.pop();
  }
}
