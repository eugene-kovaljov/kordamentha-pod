import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RoutingModule } from './core/routing/app.routing.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    SharedModule,
    WelcomeModule,
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 50
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
