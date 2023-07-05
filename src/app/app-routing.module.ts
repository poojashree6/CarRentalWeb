import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RentrecordComponent } from './modules/admin/components/rentrecord/rentrecord.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: 'rentrecord', component:RentrecordComponent},
  {path:'admin',
  canActivate:[AuthGuard],
  loadChildren: () => 
        import('./modules/admin/admin.module').then((m)=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
