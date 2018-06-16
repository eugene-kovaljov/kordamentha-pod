import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { AccountComponent } from './account.component';
import { KmFormModule } from '../../../shared/components/form/km-form.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { clientAccountReducers } from './reducers/account.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ClientAccountEffects } from './effects/account.effects';
import { ClientAccountService } from './services/account.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    KmFormModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('clientAccount', clientAccountReducers),
    EffectsModule.forFeature([ClientAccountEffects])
  ],
  declarations: [AccountComponent],
  exports: [],
  providers: [ClientAccountService]
})
export class AccountModule {}
