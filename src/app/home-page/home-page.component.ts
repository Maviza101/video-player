import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DEFAULT_VIDEO_ID } from '../values/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.styl']
})
export class HomePageComponent implements OnInit {
  videoId = DEFAULT_VIDEO_ID;

  constructor(
    private route: ActivatedRoute
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
