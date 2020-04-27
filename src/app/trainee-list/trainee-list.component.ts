import { Component, OnInit } from '@angular/core';
import {TraineeModel} from '../model/trainee-model';
import {TraineeServiceService} from '../services/trainee-service.service';

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.css']
})
export class TraineeListComponent implements OnInit {

  traineeList:TraineeModel[];
  constructor(private service:TraineeServiceService) { }

  ngOnInit(): void {
     
      this.loadUserList();
  
  }

  loadUserList(){
    this.service.getTraineeList().subscribe(
      (data) => { this.traineeList = data; }
    );
  }

}
