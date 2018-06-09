import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class RoutingModule {}
