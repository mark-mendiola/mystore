import { Component, OnInit, Input } from '@angular/core';

import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  options = {};

  menuIsVisible = false;

  faChevronCircleRight = faChevronCircleRight;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    if (this.menuIsVisible === true) {
      this.menuIsVisible = false;
    } else {
      this.menuIsVisible = true;
    }
  }

}
