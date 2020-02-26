import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DEFAULT_VIDEO_ID } from '../values/constants';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.styl']
})
export class PageNotFoundComponent implements OnInit {
  videoId = DEFAULT_VIDEO_ID;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const possibleVideoId = params.id;
      if (possibleVideoId) {
        this.videoId = params.id;
      }
    });
  }
}
