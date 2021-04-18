import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//----- Modules -----//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from  './custom-material/custom-material.module'

//----- Components -----//
import { AccueilComponent } from './accueil/accueil.component';
import { MaladieComponent } from './maladie/maladie.component';
import { VaccinComponent } from './vaccin/vaccin.component';
import { PreventionComponent } from './prevention/prevention.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MaladieComponent,
    VaccinComponent,
    PreventionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
