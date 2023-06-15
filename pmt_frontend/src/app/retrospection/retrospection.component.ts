// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-retrospection',
//   templateUrl: './retrospection.component.html',
//   styleUrls: ['./retrospection.component.css']
// })
// export class RetrospectionComponent {
// retrospection: any;
// displayedColumns: any;
// openDialog() {
// throw new Error('Method not implemented.');
// }

// }

import { Component, OnInit } from '@angular/core';
import { RetrospectionService } from '../retrospection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrospection',
  templateUrl: './retrospection.component.html',
  styleUrls: ['./retrospection.component.css'],
  providers: [RetrospectionService] // Register the service provider
})
export class RetrospectionComponent implements OnInit {
  openRetrospection: any;
  deleteRetrospection(arg0: any) {
    throw new Error('Method not implemented.');
  }
  Retrospection: any[] = [];
  displayedColumns: string[] = ['Release_Sprint_id', 'Created_by', 'Created_On', 'Status'];

  constructor(private retrospectionService: RetrospectionService, private router: Router) { }

  ngOnInit() {
    this.fetchRetrospection();
  }

  fetchRetrospection() {
    this.retrospectionService.getretrospection().subscribe((data: any[]) => {
      this.Retrospection = data;
      console.log(this.Retrospection);
    });
  }
}
