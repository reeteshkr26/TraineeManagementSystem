import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {TraineeModel} from '../model/trainee-model';

@Injectable({
  providedIn: 'root'
})
export class TraineeServiceService {

  baseUrl:string;
  constructor(private http:HttpClient ) { 
    this.baseUrl=`${environment.baseMwUrl}/trainees`; //http://localhost:7000/trainees
  }

  getTraineeList():Observable<TraineeModel[]>{
      return this.http.get<TraineeModel[]>(this.baseUrl);  
  }

  addTrainee(traineeModel:TraineeModel):Observable<TraineeModel>{
    return this.http.post<TraineeModel>(this.baseUrl,traineeModel);
  }
  findTraineeById(traineeId:number):Observable<TraineeModel>{
    return this.http.get<TraineeModel>(`${this.baseUrl}/${traineeId}`); //http://localhost:7000/trainees/101
  }
  deleteById(traineeId:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${traineeId}`);
  }
  updateTrainee(trainee:TraineeModel):Observable<TraineeModel>{
    return this.http.put<TraineeModel>(this.baseUrl,trainee);
  }
}
