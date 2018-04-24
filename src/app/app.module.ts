import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { CalcService } from './serveice/calc.service';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { UnderlineDirective } from './underline.directive';
import { ColorredDirective } from './directive/colorred.directive';
import { AppClickComponent } from './component/app-click/app-click.component';
import { AppPropatiyBindingComponent } from './component/app-propatiy-binding/app-propatiy-binding.component';
import { AppAtributeBindingComponent } from './component/app-atribute-binding/app-atribute-binding.component';
import { AppClassBindingComponent } from './component/app-class-binding/app-class-binding.component';
import { AppStyleBindingComponent } from './component/app-style-binding/app-style-binding.component';
import { AppTwoWayComponent } from './component/app-two-way/app-two-way.component';
import { AppChildComponent } from './component/app-child/app-child.component';
import { NgClassComponent } from './component/ng-class/ng-class.component';
import { NgStyleComponent } from './component/ng-style/ng-style.component';

const appRoutes: Routes = [ 
  { path: '', component: AppComponent }, 
] ;

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    UnderlineDirective,
    ColorredDirective,
    AppClickComponent,
    AppPropatiyBindingComponent,
    AppAtributeBindingComponent,
    AppClassBindingComponent,
    AppStyleBindingComponent,
    AppTwoWayComponent,
    AppChildComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CalcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
