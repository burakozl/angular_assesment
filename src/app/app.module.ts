import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { simpleReducer } from './simple.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentwithgridComponent } from './contentwithgrid/contentwithgrid.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { BaseService } from './services/base.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentwithgridComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      color: simpleReducer
    }),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
