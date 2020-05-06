//core angular modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//external angular components,modules,directives
import { AppComponent } from './app.component';
//Shared Module
import { SharedModule } from '../shared/shared.module'
//core Module
import { CoreModule } from '../core/core.module'
//routes
import { AppRoutingModule } from './app.routing';
import { AdminLayoutComponent } from '../core/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from '../core/layout/user-layout/user-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { PublicLayoutComponent } from '../core/layout/public-layout/public-layout.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { MaterialModule } from '../shared/material.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { DetailPageComponent } from './detail/detailpage/detailpage.component';
import { ShareButtonModule } from '@ngx-share/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, AdminLayoutComponent,
    UserLayoutComponent, PublicLayoutComponent, DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ShareButtonModule,
    MaterialModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
