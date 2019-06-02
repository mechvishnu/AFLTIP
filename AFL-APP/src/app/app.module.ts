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
import { AgmCoreModule } from '@agm/core';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeroComponent } from './hero/hero.component';
import { TeamMatchesComponent } from './teams/team-matches/team-matches.component';
import { MatchesComponent } from './matches/matches.component';



const appRoutes :Routes = [
  {path:'' , component: HomeComponent},
  {path:'teams/:id/:name' , component:TeamMatchesComponent},
  {path:'ladder',component:LadderComponent},
  {path:'teams',component:TeamsComponent},
  {path:'win',component:WinningPredictionComponent},
  {path:'matches',component:MatchesComponent},
  {path:'stadiums',component:GeoLocationComponent}]
@NgModule({
  declarations: [
    AppComponent,
    TeamlistComponent,
    NavbarComponent,
    TeamsComponent,
    TeamComponent,
    LadderComponent,
    WinningPredictionComponent,
    GeoLocationComponent,
    NewsComponent,
    HomeComponent,
    FooterComponent,
    HeroComponent,
    TeamMatchesComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-ezjOuNAoceyX1r2kqrk60Nrh3aXCk5k',
      libraries: ["places", "geometry"]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
