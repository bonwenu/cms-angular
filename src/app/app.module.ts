import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCreatorPageComponent } from './components/content-creator-page/content-creator-page.component';
import { ContentFinderPageComponent } from './components/content-finder-page/content-finder-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModuleCreatorPageComponent } from './components/module-creator-page/module-creator-page.component';
import { ModuleIndexPageComponent } from './components/module-index-page/module-index-page.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { MatProgressSpinnerModule} from '@angular/material';

/** @ignore */
@NgModule({
   declarations: [
      AppComponent,
      ContentCreatorPageComponent,
      ContentFinderPageComponent,
      NavbarComponent,
      ModuleCreatorPageComponent,
      ModuleIndexPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgSelectModule,
      FormsModule,
      CommonModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(), // toastrModule
      MatProgressSpinnerModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
