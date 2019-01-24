import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('imgState', [state('normal', style({ transform: 'translateX(100px)' })),
    state('moved', style({ transform: 'translateX(0)' })),
    transition('normal => moved', animate(300)),
    transition('moved => normal', animate(1000))
    ])]
})
export class AppComponent {
  state = 'normal';
  title = 'animations';
  onAnimate() {
    this.state === 'normal' ? this.state = 'moved' : this.state = 'normal';
  }
}
