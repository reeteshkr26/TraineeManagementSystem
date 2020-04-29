import { Component, OnInit } from '@angular/core';
import {TraineeModel} from '../model/trainee-model';
import {TraineeServiceService} from '../services/trainee-service.service';

@Component({
  selector: 'app-search-trainee',
  templateUrl: './search-trainee.component.html',
  styleUrls: ['./search-trainee.component.css']
})
export class SearchTraineeComponent implements OnInit {

  traineeId:number;
  model:TraineeModel;
  dataFound:boolean;
  dataNotFound:boolean;
  submitted:boolean;
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

}
