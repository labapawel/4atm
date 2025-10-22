import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SerwisService } from './serwis.service';
import { PierwiastekComponent } from './pierwiastek/pierwiastek.component';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Pierwiastek } from './pierwiastek';

@Component({
  selector: 'app-root',
  imports: [PierwiastekComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 title = 'tm';
   dane: Array<Pierwiastek> = [];
   constructor (private serv:SerwisService){
     serv.sub().subscribe(e=>{

       this.dane = e;
     })
   }  
}
