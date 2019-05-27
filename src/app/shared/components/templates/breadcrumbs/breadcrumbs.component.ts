import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';

import { faHome } from '@fortawesome/free-solid-svg-icons';

interface Breadcrumb {
  label: string;
  url: string;
  params: Params;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[];

  faHome = faHome;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.router.events);
  }

}
