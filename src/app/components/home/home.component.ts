import { Component } from "@angular/core";
import { Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  public constructor(private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('Curso de Angular');
  }

}
