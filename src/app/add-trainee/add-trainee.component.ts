import { Component, OnInit } from '@angular/core';
import {TraineeModel} from  '../model/trainee-model';
import {TraineeServiceService} from '../services/trainee-service.service';

@Component({
  selector: 'app-add-trainee',
  templateUrl: './add-trainee.component.html',
  styleUrls: ['./add-trainee.component.css']
})
export class AddTraineeComponent implements OnInit {

  success:boolean;
  domainList=["Java Developer","Front End Developer","JEE","Android Developer"];
  model:TraineeModel;
  
  constructor(private service:TraineeServiceService) { 
    this.model=new TraineeModel();
  }

  ngOnInit(): void {
  }

  addTrainee(){
      let orb=this.service.addTrainee(this.model);
      orb.subscribe((data)=>
      {
        this.success=true;
        setTimeout(()=>this.success=false,3000);
      })
  }

}
