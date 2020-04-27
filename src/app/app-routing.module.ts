import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TraineeListComponent } from './trainee-list/trainee-list.component';
import { AddTraineeComponent } from './add-trainee/add-trainee.component';
import { SearchTraineeComponent } from './search-trainee/search-trainee.component';
import { DeleteTraineeComponent } from './delete-trainee/delete-trainee.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'viewAllTrainee',component:TraineeListComponent},
  {path:'addTrainee',component:AddTraineeComponent},
  {path:'searchTrainee',component:SearchTraineeComponent},
  {path:'deleteTrainee',component:DeleteTraineeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
