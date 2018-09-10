import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MessagingDataService } from './services/messaging-data.service';
import { LoaderService } from './services/loader.service';
import {FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }      from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RegistrationComponent } from './login/registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterDataPipe } from './filter-data.pipe';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HightlightColorDirective } from './hightlight-color.directive';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { GridComponent } from './grid/grid.component';
import { FilterService } from './grid/filter.service';

const routes : Routes = [
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent,data: { page: 'login' }},
  {path:'messaging' , component:MessagingComponent,data: { page: 'messaging' }},
  {path:'registration', component:RegistrationComponent},
  {path:'navbar', component:NavbarComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagingComponent,
    RegistrationComponent,
    NavbarComponent,
    FilterDataPipe,
    ChildCompComponent,
    HightlightColorDirective,
    HeaderComponent,
    LoaderComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessagingDataService,LoaderService,FilterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
