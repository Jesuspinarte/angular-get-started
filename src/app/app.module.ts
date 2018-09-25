import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { HomeComponent } from './components/home/home.component';

// Directives
import { BrandDirective } from './directives/brand.directive';
import { EventsDirective } from './directives/events.directive';

// Pipes
import { JoinPipe } from './pipes/join/join.pipe';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    HomeComponent,
    BrandDirective,
    EventsDirective,
    JoinPipe
  ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
