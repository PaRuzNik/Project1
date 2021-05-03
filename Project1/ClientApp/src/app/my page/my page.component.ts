import { Component } from '@angular/core';

@Component({
  selector: 'app-my page',
  templateUrl: './my page.component.html',
})
export class MyPageComponent {
  condition: boolean = true;
  toggle()
  {
    this.condition = !this.condition;
  }
}

