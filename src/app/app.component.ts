import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { RetrospectionService } from './retrospection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Managment Tool';
  
  retrospectionService: any;

  getRetro(){
    this.retrospectionService.retrospection().subscribe(
      (resp: any) => {
        console.log(resp);
      },
      (err: any) => {
        console.log(err);
      }
    );

  }

}