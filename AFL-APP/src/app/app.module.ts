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
import { LadderComponent } from './ladder/ladder.component';
import { WinningPredictionComponent } from './winning-prediction/winning-prediction.component';
import { GeoLocationComponent } from './geo-location/geo-location.component';


const appRoutes :Routes = [
  {path:'' , component: TeamlistComponent},
  {path:'teams/:id/:name' , component:TeamComponent},
  {path:'ladder',component:LadderComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TeamlistComponent,
    NavbarComponent,
    TeamsComponent,
    TeamComponent,
    LadderComponent,
    WinningPredictionComponent,
    GeoLocationComponent
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
