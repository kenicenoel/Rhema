import { Component, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: 'favourite.html'
})
export class FavouriteComponent 
{

  @Input() isFavourite: boolean;
  constructor(){}

}
