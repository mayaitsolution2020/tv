import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components

import { UserHeaderComponent } from './layout/user-layout/user-header/user-header.component';
import { UserFooterComponent } from './layout/user-layout/user-footer/user-footer.component';
import { HeaderComponent } from './layout/admin-layout/header/header.component';
import { FooterComponent } from './layout/admin-layout/footer/footer.component';
import { SidebarComponent } from './layout/admin-layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PublicHeaderComponent } from './layout/public-layout/public-header/public-header.component';
import { PublicFooterComponent } from './layout/public-layout/public-footer/public-footer.component';




@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    UserHeaderComponent, 
    UserFooterComponent,
    SidebarComponent,
    PublicFooterComponent,
    PublicHeaderComponent
    
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [CommonModule, HeaderComponent, FooterComponent,  UserHeaderComponent, UserFooterComponent, SidebarComponent, PublicFooterComponent,
    PublicHeaderComponent],
})
export class CoreModule { }
