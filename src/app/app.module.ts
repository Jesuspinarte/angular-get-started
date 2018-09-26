import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { HomeComponent } from './components/home/home.component';
import { PanelComponent } from './components/panel/panel.component';

// Directives
import { BrandDirective } from './directives/brand.directive';
import { EventsDirective } from './directives/events.directive';

// Pipes
import { JoinPipe } from './pipes/join/join.pipe';
import { PureImpurePipe } from './pipes/practice/pure_impure.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    PanelComponent,
    BrandDirective,
    EventsDirective,
    JoinPipe,
    PureImpurePipe
  ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
