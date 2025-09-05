import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string = "";
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();

  setAsFav(person: string): void {
    this.addFav.emit(person);
  }

}
