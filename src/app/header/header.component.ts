import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../services/login-service.service';
import {UserModel} from '../model/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:LoginServiceService) { }

  ngOnInit(): void {
  }

}
