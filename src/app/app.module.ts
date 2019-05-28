import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatExpansionModule,  MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTooltipModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ParcourComponent } from './parcour/parcour.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'parcour', component: ParcourComponent },
  { path: 'works', component: WorksComponent },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    ParcourComponent,
    PageNotFoundComponent,
    ContactComponent,
    HomeComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
export {routes};

