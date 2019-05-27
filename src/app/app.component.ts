import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Store';

  constructor(
    private titleService: Title
  ) {}

  ngOnInit() {
    this.setTitle();
  }

  public setTitle(title: string = '') {
    this.titleService.setTitle(this.title);
  }

}
