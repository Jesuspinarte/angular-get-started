import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  template: `
    <div class="card-panel">
      <span class="black-test">
        UserID: {{ user.id }},
        username: {{ user.username }}
      </span>
    </div>
  `
})

export class PanelComponent {

  @Input() user: Object;

}
