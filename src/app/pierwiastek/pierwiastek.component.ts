import { Component, Input } from '@angular/core';
import { Pierwiastek } from '../pierwiastek';

@Component({
  selector: 'app-pierwiastek',
  imports: [],
  templateUrl: './pierwiastek.component.html',
  styleUrl: './pierwiastek.component.scss'
})
export class PierwiastekComponent {
 @Input() dane:Pierwiastek = {symbol:"", xpos:0, ypos:0, wxpos:0, wypos:0};
}
