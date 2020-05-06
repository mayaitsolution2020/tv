import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from 'src/app/core/service/auth-guard.service';
import { TransformationListComponent } from './adminComponent/transformationlist/transformationlist.component';
import { TestimonyListComponent } from './adminComponent/testimonylist/testimonylist.component';
import { QuoteslistComponent } from './adminComponent/quoteslist/quoteslist.component';
import { PinkaffiliateListComponent } from './adminComponent/pinkaffiliatelist/pinkaffiliatelist.component';
import { PinkaffiliateAdminComponent } from './adminComponent/pinkaffiliateadmin/pinkaffiliateadmin.component';
import { QuotesAdminComponent } from './adminComponent/quotesadmin/quotesadmin.component';
import { TestimonyComponent } from './adminComponent/testimony/testimony.component';
import { TransformationAdminComponent } from './adminComponent/transformationadmin/transformationadmin.component';
import { ProductListComponent } from './adminComponent/productlist/productlist.component';
import { ProductInfoComponent } from './adminComponent/productinfo/productinfo.component';
import { ProductCategoryComponent } from './adminComponent/productcategory/productcategory.component';
import { AddClassComponent } from './adminComponent/addclass/addclass.component';
import { ViewClassComponent } from './adminComponent/viewclass/viewclass.component';
import { PodcastListComponent } from './adminComponent/podcastlist/podcastlist.component';
import { PodcastAdminComponent } from './adminComponent/podcastadmin/podcastadmin.component';
import { VideoListComponent } from './adminComponent/videolist/videolist.component';
import { VideoAdminComponent } from './adminComponent/videoadmin/videoadmin.component';
import { ChallengesAdminComponent } from './adminComponent/challengesadmin/challengesadmin.component';
import { ChallengesListComponent } from './adminComponent/challengeslist/challengeslist.component';
import { VideoMotivationComponent } from './adminComponent/videomotivation/videomotivation.component';
import { VideoMotivationListComponent } from './adminComponent/videomotivationlist/videomotivationlist.component';
import { UserListComponent } from './adminComponent/userlist/userlist.component';
import { UserComponent } from './adminComponent/user/user.component';
import { ProductcatListComponent } from './adminComponent/productcatlist/productcatlist.component';
import { MotivationMusicComponent } from './adminComponent/motivationmusic/motivationmusic.component';
import { MotivationmusiclistComponent } from './adminComponent/motivationmusiclist/motivationmusiclist.component';
import { PostTransformationComponent } from './adminComponent/posttransformation/posttransformation.component';
import { PostListComponent } from './adminComponent/postlist/postlist.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatDatepickerModule } from '@angular/material';




const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'transformationlist',
    component: TransformationListComponent,
    canActivate: [AuthGuardService]
  }

  , {
    path: 'testimonylist',
    component: TestimonyListComponent,
    canActivate: [AuthGuardService]
  }
  ,
  {
    path: 'quoteslist',
    component: QuoteslistComponent, canActivate: [AuthGuardService]
  }
  , {
    path: 'pinkaffiliatelist',
    component: PinkaffiliateListComponent, canActivate: [AuthGuardService]
  }
  , {
    path: 'pinkaffiliateadmin/:id',
    component: PinkaffiliateAdminComponent, canActivate: [AuthGuardService]
  }
  , {
    path: 'pinkaffiliateadmin',
    component: PinkaffiliateAdminComponent, canActivate: [AuthGuardService]
  }
  , {
    path: 'quotesadmin/:id',
    component: QuotesAdminComponent, canActivate: [AuthGuardService]
  }
  , {
    path: 'quotesadmin',
    component: QuotesAdminComponent, canActivate: [AuthGuardService]
  }
  , {
    path: 'testimony',
    component: TestimonyComponent, canActivate: [AuthGuardService]
  }
  , {
    path: 'testimony/:id',
    component: TestimonyComponent, canActivate: [AuthGuardService]
  }
  , {
    path: 'transformationadmin',
    component: TransformationAdminComponent, canActivate: [AuthGuardService]

  }
  , {
    path: 'transformationadmin/:id',
    component: TransformationAdminComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'productlist',
    component: ProductListComponent, canActivate: [AuthGuardService]

  }, {
    path: 'productinfo',
    component: ProductInfoComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'productinfo/:id',
    component: ProductInfoComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'productcategory',
    component: ProductCategoryComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'productcategory/:id',
    component: ProductCategoryComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'addclass/:id',
    component: AddClassComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'addclass',
    component: AddClassComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'viewclass',
    component: ViewClassComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'podcastlist',
    component: PodcastListComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'podcastadmin',
    component: PodcastAdminComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'podcastadmin/:id',
    component: PodcastAdminComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'videolist',
    component: VideoListComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'videoadmin',
    component: VideoAdminComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'videoadmin/:id',
    component: VideoAdminComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'challengesadmin/:id',
    component: ChallengesAdminComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'challengesadmin',
    component: ChallengesAdminComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'challengeslist',
    component: ChallengesListComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'videomotivation',
    component: VideoMotivationComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'videomotivation/:id',
    component: VideoMotivationComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'videomotivationlist',
    component: VideoMotivationListComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'userlist',
    component: UserListComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'user/:id',
    component: UserComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'productcatlist',
    component: ProductcatListComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'motivationmusic',
    component: MotivationMusicComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'motivationmusic/:id',
    component: MotivationMusicComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'musiclist',
    component: MotivationmusiclistComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'transformationpost/:id',
    component: PostTransformationComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'transformationpost',
    component: PostTransformationComponent, canActivate: [AuthGuardService]

  },
  {
    path: 'postlist',
    component: PostListComponent, canActivate: [AuthGuardService]

  }

];

@NgModule({
  declarations: [
    DashboardComponent,
    TransformationAdminComponent,
    TransformationListComponent,
    TestimonyComponent,
    TestimonyListComponent,
    QuoteslistComponent,
    ProductCategoryComponent,
    ProductcatListComponent,
    ProductInfoComponent,
    ProductListComponent,
    QuotesAdminComponent,
    PinkaffiliateAdminComponent,
    PinkaffiliateListComponent,
    ViewClassComponent,
    AddClassComponent,
    PodcastListComponent,
    PodcastAdminComponent,
    VideoAdminComponent,
    VideoListComponent,
    ChallengesAdminComponent,
    ChallengesListComponent,
    VideoMotivationComponent,
    VideoMotivationListComponent,
    UserListComponent,
    UserComponent,
    MotivationMusicComponent,
    MotivationmusiclistComponent,
    PostTransformationComponent,
    PostListComponent



  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,


  ],
  providers: [MatDatepickerModule],
})
export class AdminModule { }
