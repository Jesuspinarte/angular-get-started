import { Component } from "@angular/core";
import { Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  title: string = "Pipes en Angular";
  paragraph: string = "Parágrafo";
  today: Date = new Date();
  users = ['Camilo', 'Andrea', 'Tesla'];
  courses: Array<string> = [
    'Fotografía',
    'Guion',
    'Programación',
    'Hermenéutica'
  ];

  public constructor(private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('Curso de Angular');
  }

}
