import { Component } from '@angular/core';
import { ReleaseSprint } from '../classes/release-sprint';
import { Dialog } from '@angular/cdk/dialog';
import { ReleaseService } from '../service/release.service';
import { ActivatedRoute } from '@angular/router';
import { ReleaseSprintService } from '../service/release-sprint.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent {
  
  todo = [''];

  // done = [''];

  id: number;

  // releaseSprintClass: ReleaseSprint[] = [];

  releasesSprint: ReleaseSprint = new ReleaseSprint();

  constructor(public dialog: Dialog, private releaseService: ReleaseService, private Aroute: ActivatedRoute, private releaseSprintService: ReleaseSprintService) {

  }

  // -------------Get release Data By Id -----------------


  ngOnInit() {
    console.log("Scrum Board Works")
    this.id = this.Aroute.snapshot.params['id'];
    this.releaseSprintService.getReleaseSprintById(this.id).subscribe(data => {
      this.releasesSprint = data;
      console.log("Scrum Board Works")
    });

    // this.getReleaseSprint();
  }


  // Meyhod to access Release Sprint 

  // private getReleaseSprint() {
  //   this.releaseSprintService.getReleaseSprint().subscribe(data => {
  //     this.releaseSprintClass = data;
  //     console.log(data)
  //   })
  // }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(EditFormComponent, {
  //     width: '100%',
  //     height: '100%',
  //   });


  // }

  // userstory : Userstory[] ;

  // tasks: Tasks[] = [];

  // inprogress : Tasks[] = [] ;

  // testing : Tasks[] = [] ;

  // done : Tasks[] = [] ;




  // displayStyle = "none";

  // openPopup() {

  //     this.displayStyle = "block";

  // }
  // closePopup() {
  //   this.displayStyle = "none";
  // }

  // openDialog(){
  //   this.dialog.open(DialogComponent, {
  //     width : '30%'  

  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'save'){
  //       this.getTask() ;
  //     }
  //   })
  // }

  //popoig update 

  // editTask(row : any){
  //   this.dialog.open(DialogComponent ,{
  //     width : '30%' ,
  //     data : row 
  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'update'){
  //       this.getTask() ;
  //     }
  //   })
  // }

  // showTaskDetail(row : any){
  //   this.dialog.open(MouseOverComponent ,{
  //     width : '30%' ,
  //     data : row 
  //   }).afterClosed().subscribe(val=>{
  //     if(val === 'update'){
  //       this.getTask() ;
  //     };
  //   })
  // }

  // deleteTask(id : number){
  //   this.taskService.deleteTask(id).subscribe({
  //     next : (res) => {
  //       // alert("task Deleted");
  //       this.getTask();
  //     },error : ()=>{
  //       alert("error While Delecting Record");
  //     }
  //   })
  // }
}
