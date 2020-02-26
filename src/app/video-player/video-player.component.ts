import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.styl']
})
export class VideoPlayerComponent implements OnInit {
  @Input() titleOfVideo: string;
  @Input() videoId: string;
  videoUrl: string;

  constructor() {}

  ngOnInit() {
    this.videoUrl = `https://static.chorus.ai/api/${ this.videoId }.mp4`;
  }
}
