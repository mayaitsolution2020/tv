import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent, QuoteDetailComponent } from './components/quote/quote.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { VideosComponent, PlayVideoComponent } from './components/videos/videos.component';
import { IndexComponent, TextSignupComponent, IndexVideoComponent } from './components/index/index.component';
import { PinkaffiliateComponent, PinkaffiliateDetailComponent } from './components/pinkaffiliate/pinkaffiliate.component';
import { TestimoniesComponent, TestimoniesDetailComponent } from './components/testimonies/testimonies.component';
import { TransformationComponent, TransformationDetailComponent } from './components/transformation/transformation.component';
import { TravisRecommendDetailComponent, TravisRecommendComponent, TruncatePipe } from './components/travisrecommend/travisrecommend.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { MaterialModule } from 'src/app/shared/material.module';
import { ShareButtonModule } from '@ngx-share/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent
  },
  {
    path: 'pinkaffiliates',
    component: PinkaffiliateComponent
  },
  {
    path: 'pinkaffiliatesdetail/:ID',
    component: PinkaffiliateDetailComponent
  },
  {
    path: 'detail/:ID',
    component: DetailComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'testimonies',
    component: TestimoniesComponent
  },
  {
    path: 'testimoniesdetail/:ID',
    component: TestimoniesDetailComponent
  },
  {
    path: 'transformations',
    component: TransformationComponent
  },
  {
    path: 'transformationsdetail/:ID',
    component: TransformationDetailComponent
  },
  {
    path: 'products', component: TravisRecommendComponent
  },
  {
    path: 'productdetail/:ID', component: TravisRecommendDetailComponent
  },
  {
    path: 'quotes',
    component: QuoteComponent
  },
  {
    path: 'quotesdetail/:ID', component: QuoteDetailComponent
  },
  {
    path: 'podcasts',
    component: PodcastComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'playvideo/:ID',
    component: PlayVideoComponent
  },
  {
    path: 'textsignup',
    component: TextSignupComponent
  },
];

@NgModule({
  declarations: [
    IndexComponent,
    PinkaffiliateComponent,
    PinkaffiliateDetailComponent,
    TestimoniesComponent,
    TestimoniesDetailComponent,
    TransformationComponent,
    TransformationDetailComponent,
    TravisRecommendComponent,
    TravisRecommendDetailComponent,
    QuoteComponent,
    QuoteDetailComponent,
    PodcastComponent,
    VideosComponent,
    PlayVideoComponent,
    TextSignupComponent,
    IndexVideoComponent,
    TruncatePipe,
    DetailComponent,

  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    JwSocialButtonsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    ShareButtonModule,
    RouterModule.forChild(routes),

  ],
  providers: [TransformationDetailComponent],
  entryComponents: [IndexVideoComponent, PlayVideoComponent],
})
export class PublicModule { }
