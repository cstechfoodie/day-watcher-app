import { Component, OnInit } from '@angular/core';
import { DateInterval, Duration } from '../../node_modules/dates-ranger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'day-watcher-app';
}
