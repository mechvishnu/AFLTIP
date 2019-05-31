import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './teams/team/team.component';


const appRoutes :Routes = [
  {path:'' , component: TeamlistComponent},
  {path:'teams/:id/:name' , component:TeamComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    TeamlistComponent,
    NavbarComponent,
    TeamsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
