import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ChristmasComponent, ChristmasPrintComponent } from './components/challenges/christmas/christmas.component';
import { DetoxComponent, DetoxPrintComponent, DetoxVideoPopupComponent } from './components/challenges/detox/detox.component';
import { RedemmedComponent, RedemmedPrintComponent, VideoPopupComponent } from './components/challenges/redemmed/redemmed.component';
import { ShibbolethVilleComponent, ShibbolethVillePrintComponent, ShibbolethLanLoverPrintComponent, ShibbolethVilleVideoPopupComponent } from './components/challenges/shibbolethville/shibbolethville.component';

import { SummerSlimdownComponent, SummerSlimdownPrintComponent, SummerSlimdownWeekPrintComponent, SummerVideoPopupComponent } from './components/challenges/summerslimdown/summerslimdown.component';
import { TigerEyeComponent, TigerEyePrintComponent } from './components/challenges/tigereye/tigereye.component';
import { ZeroDragComponent, ZeroDragPrintComponent, ZeroDragVideoPopupComponent } from './components/challenges/zerodrag/zerodrag.component';
import { Shibboleth3dayComponent, Shibboleth3dayPrintComponent, shibbolethVideoPopupComponent } from './components/challenges/shibboleth3day/shibboleth3day.component';
import { Shibboleth21daysComponent, Shibboleth21daysPrintComponent, ShibbolethDaysVideoPopupComponent } from './components/challenges/shibboleth21days/shibboleth21days.component';
import { UserMenuComponent } from './components/usermenu/usermenu.component';
import { CoreModule } from 'src/app/core/core.module';
import { AuthGuardService } from 'src/app/core/service/auth-guard.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GutBustersComponent, GutBustersPrintComponent, GutBustersVideoComponent } from './components/challenges/gutbusters/gutbusters.component';
import { InterventionComponent, InterventionPrintComponent, InterventionVideoComponent } from './components/challenges/intervention/intervention.component';
import { MealComponent } from './components/meal/meal.component';
import { AddMealComponent } from './components/addmeal/addmeal.component';

const routes: Routes = [
  {
    path: 'challenge',
    component: ChallengesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'christmas',
    component: ChristmasComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'christmasprint',
    component: ChristmasPrintComponent
  },

  {
    path: 'detox',
    component: DetoxComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'detoxpprint',
    component: DetoxPrintComponent
  },
  {
    path: 'redeemed',
    component: RedemmedComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'redeemedprint',
    component: RedemmedPrintComponent
  },
  {
    path: 'ville',
    component: ShibbolethVilleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'shibbolethvilleprint',
    component: ShibbolethVillePrintComponent
  },
  {
    path: 'landloverprint',
    component: ShibbolethLanLoverPrintComponent
  },

  {
    path: 'shibboleth21daysprint',
    component: Shibboleth21daysPrintComponent
  },
  {
    path: 'shibboleth21days',
    component: Shibboleth21daysComponent
  },
  {
    path: 'summerslimdown',
    component: SummerSlimdownComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'summerslimdownprint',
    component: SummerSlimdownPrintComponent
  },
  {
    path: 'summerslimweekprint',
    component: SummerSlimdownWeekPrintComponent
  },
  {
    path: 'tigereye',
    component: TigerEyeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tigereyeprint',
    component: TigerEyePrintComponent
  },
  {
    path: 'zerodrag',
    component: ZeroDragComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'zerodragprint',
    component: ZeroDragPrintComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '3daysplan',
    component: Shibboleth3dayComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: '3daysplanprint',
    component: Shibboleth3dayPrintComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gutbuster',
    component: GutBustersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'gutbusterprint',
    component: GutBustersPrintComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'interventionprint',
    component: InterventionPrintComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'intervention',
    component: InterventionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'meal',
    component: AddMealComponent,

  },
  {
    path: 'meal/:id',
    component: AddMealComponent,

  },
  {
    path: 'meallist',
    component: MealComponent
  }

  // {
  //   path: 'redeemvideo/:videoUrl',
  //   component: VideoPopupComponent,
  //   canActivate: [AuthGuardService]
  // },
];

@NgModule({
  declarations: [
    ChallengesComponent,
    Shibboleth3dayComponent,
    Shibboleth21daysComponent,
    ChristmasComponent,
    DetoxComponent,
    RedemmedComponent,
    ShibbolethVilleComponent,
    SummerSlimdownComponent,
    TigerEyeComponent,
    ZeroDragComponent,
    UserMenuComponent,
    ChristmasPrintComponent,
    RedemmedPrintComponent,
    DetoxPrintComponent,
    Shibboleth3dayPrintComponent,
    Shibboleth21daysPrintComponent,
    TigerEyePrintComponent,
    ZeroDragPrintComponent,
    ShibbolethVillePrintComponent,
    SummerSlimdownPrintComponent,
    SummerSlimdownWeekPrintComponent,
    VideoPopupComponent,
    ShibbolethLanLoverPrintComponent,
    DetoxVideoPopupComponent,
    SummerVideoPopupComponent,
    shibbolethVideoPopupComponent,
    ZeroDragVideoPopupComponent,
    ShibbolethDaysVideoPopupComponent,
    ShibbolethVilleVideoPopupComponent,
    GutBustersComponent,
    GutBustersPrintComponent,
    GutBustersVideoComponent,
    InterventionComponent,
    InterventionPrintComponent,
    InterventionVideoComponent,
    MealComponent,
    AddMealComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule,
    MaterialModule

  ],
  providers: [],
  entryComponents: [VideoPopupComponent, DetoxVideoPopupComponent, SummerVideoPopupComponent,
    shibbolethVideoPopupComponent, ZeroDragVideoPopupComponent, ShibbolethDaysVideoPopupComponent, ShibbolethVilleVideoPopupComponent,
    InterventionVideoComponent, GutBustersVideoComponent]
})
export class UserModule { }
