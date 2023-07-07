import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { RentcarComponent } from './components/rentcar/rentcar.component';
import { ReviewComponent } from './components/review/review.component';
import { RentrecordComponent } from './components/rentrecord/rentrecord.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      {path:'review',component:ReviewComponent},
      {path: 'rentrecord', component:RentrecordComponent},
      {path:'rentcar',component:RentcarComponent},
      {path:'payment',component:PaymentComponent}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
