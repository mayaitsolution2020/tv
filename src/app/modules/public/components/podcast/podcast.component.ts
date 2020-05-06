import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../../public.service';
import { podcastData } from 'src/app/modules/public/model/podcast';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
  // page: number = 1;
  // newpodcasts: podcastData;
  // archievepodcasts: podcastData;
  // PodcastID: any;
  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
  ) { }

  ngOnInit() {
    // this.getPodcasts();
  }

  //   getPodcasts() {
  //   this.publicservice.getNewPodcasts().subscribe(res => {
  //     if (res.Status) {
  //       this.newpodcasts = res.Data;
  //        this.PodcastID = res.Data.PodcastID;
  //       console.log('getNewPodcasts', res.Data);

  //     }
  //   }, error => {
  //     console.log('error', error);
  //   })
  // }
}
