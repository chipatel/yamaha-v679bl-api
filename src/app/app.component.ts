import { Component } from '@angular/core';
import {YamahaService} from "./services/yamaha/yamaha.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YamahaService]
})
export class AppComponent {
  title = 'app';
}
