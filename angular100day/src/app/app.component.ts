import { Component, Version } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100day';
  name = 'dungnt.ptit'
  user = {
    name : 'dungnguyen',
    age : 24
  }

}
