import { Component, OnInit } from '@angular/core';
import {TraineeModel} from '../model/trainee-model';
import {TraineeServiceService} from '../services/trainee-service.service';

@Component({
  selector: 'app-delete-trainee',
  templateUrl: './delete-trainee.component.html',
  styleUrls: ['./delete-trainee.component.css']
})
export class DeleteTraineeComponent implements OnInit {

  traineeId:number;
  model:TraineeModel;
  dataFound:boolean;
  dataNotFound:boolean;
  submitted:boolean;
  deletedSuccess:boolean;
  deleteButtonSubmit:boolean;
  constructor(private service:TraineeServiceService) { }

  ngOnInit(): void {
   
  }
  
  findById(){
    this.submitted=true; 
      this.service.findTraineeById(this.traineeId).subscribe(
        (data)=>{
          this.dataFound=true;
          this.model=data;
          console.log(this.model);
        },
        (err)=>{
          this.dataNotFound=true;
          this.dataFound=false;
          setTimeout(()=>this.dataNotFound=false,3000);
        }
      )
  }
  deleteTraineeById(){
    if(confirm("Are u sure want to delete?")){
      this.service.deleteById(this.model.traineeId).subscribe(
        (data)=>{
          this.model=null;
          this.deleteButtonSubmit=true;
          this.submitted=false;
          this.deletedSuccess=true;
          setTimeout(()=>this.deletedSuccess=false,3000);
        }
      )
    }
 
  }

}
