import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'home.component.html',
})

export class HomeComponent {

  user: Object = {
    id: 1,
    username: 'jesuspinarte',
    age: 22
  };

}
