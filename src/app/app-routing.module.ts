import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationDetailComponent } from '../app/components/identification-details/identification-details.component';
import { ItemsComponent } from '../app/components/itemspage/items.component';
import { AdditionalDetailComponent } from '../app/components/additional-details/additional-details.component';

const routes: Routes = [
  { path: 'identification', component: IdentificationDetailComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'additionalnotes', component: AdditionalDetailComponent },
  {path: '**', redirectTo: '/identification'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
debugger
}
