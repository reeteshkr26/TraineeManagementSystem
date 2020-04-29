import { Component, OnInit } from '@angular/core';
import {TraineeModel} from '../model/trainee-model';
import {TraineeServiceService} from '../services/trainee-service.service';

@Component({
  selector: 'app-update-trainee',
  templateUrl: './update-trainee.component.html',
  styleUrls: ['./update-trainee.component.css']
})
export class UpdateTraineeComponent implements OnInit {
  success:boolean;
  domainList=["Java Developer","Front End Developer","JEE","Android Developer"];
  model:TraineeModel;
  resultModel:TraineeModel;

  errorMsg:boolean;
  popupForm:boolean;
  dataFound:boolean;
  dataNotFound:boolean;
  submitted:boolean;
  deletedSuccess:boolean;
  updateButtonSubmit:boolean;

  traineeId:number;

  constructor(private service:TraineeServiceService) { 
    this.model=new TraineeModel();
  }

  ngOnInit(): void {
  }

  findById(){
    this.submitted=true; 
    this.service.findTraineeById(this.traineeId).subscribe(
      (data)=>{
        this.dataFound=true;
        this.model=data;
        this.popupForm=true;
        console.log(this.model);
      },
      (err)=>{
        this.dataNotFound=true;
        this.dataFound=false;
        setTimeout(()=>this.dataNotFound=false,3000);
      }
    )
  }

  updateTrainee(){
    this.updateButtonSubmit=true;
    if(this.model!=null){
      this.service.updateTrainee(this.model).subscribe(
        (data)=>{
          this.resultModel=data;
          this.success=true;
          setTimeout(()=>this.success=false,3000);
          this.popupForm=false;
        },
        (err)=>{
          this.errorMsg=true;
          setTimeout(()=>this.success=false,3000);
        }
      )
    }
  }

}
