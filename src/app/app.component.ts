import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  interpolation: ['[[',']]'],
  styleUrls: ['./app.css']
})

export class AppComponent {

  title: string = "Angular 2 App";
  paragraph: string = "Nueva app con paso de variables";


}
