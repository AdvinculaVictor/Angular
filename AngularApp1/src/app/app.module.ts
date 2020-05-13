import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosService } from './datos.service';
import { ControlComponent } from './control/control.component';
import { AboutComponent } from './about/about.component';
import { PrincipalComponent } from './principal/principal.component';

const routes:Route[]=[
  { path:'', component: PrincipalComponent},
  { path:'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
