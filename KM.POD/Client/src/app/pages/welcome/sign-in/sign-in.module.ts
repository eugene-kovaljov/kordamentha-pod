import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { SignInComponent } from './components/sign-in.component';
import { RoutingModule } from '../../../core/routing/app.routing.module';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { signInReducers } from './reducers';
import { SignInService } from './services/sign-in.service';
import { EffectsModule } from '@ngrx/effects';
import { SignInEffects } from './effects/sign-in.effects';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RoutingModule,
    StoreModule.forFeature('account', signInReducers),
    EffectsModule.forRoot([SignInEffects])
  ],
  declarations: [SignInComponent],
  providers: [SignInService]
})
export class SignInModule {}
