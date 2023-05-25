import { Component } from '@angular/core';
import { Retrospection } from '../classes/retrospection';
import { RetrospectionService } from '../retrospection.service';

@Component({
  selector: 'app-retrospection',
  templateUrl: './retrospection.component.html',
  styleUrls: ['./retrospection.component.css']
})
export class RetrospectionComponent {
  retrospection_details: any; // Assuming it should be of type 'any'
  saveTable(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit():void{
    this.getretrospection();
  }
  

  i!: number;
  row: any;
  wrong: any;
  retrospectionData: any;

  deleteRow(arg0: any) {
    throw new Error('Method not implemented.');
  }

  retrospection : Retrospection[];
  constructor( private retrospectionService:RetrospectionService){

  }

  private getretrospection()
{
  this.retrospectionService.getretrospection().subscribe(data=>{
    this.retrospection=data;
    console.log(data);
  });
}
}
