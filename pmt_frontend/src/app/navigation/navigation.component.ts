import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { NavigationService } from '../navigation.service';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { ReleaseService } from '../service/release.service';
import { Release } from '../classes/release';

interface Data {
  name: string;
  icon: string;
  link: string;
  children?: Data[];
}

const TREE_DATA: Data[] = [
  {
    name: 'Epic 1',
    icon: 'E',
    link:'/epic',
    children: 
    [
      { 
        name: 'Story', 
        icon: 'S', 
        link:'/story',
        children: 
        [
          { 
            name: 'Task 1',
            link:'/task', 
            icon: 'T' 
          }, 
          { 
            name: 'Task 2',
            link:'/task', 
            icon: 'T' 
          }
        ] 
      }
    ]
  },
  {
    name: 'Epic 2',
    icon: 'E',
    link: '/epic',
    children: 
    [
      { 
        name: 'Story', 
        icon: 'S', 
        link:'/story', 
        children: 
        [
          { 
            name: 'Task 1',
            link:'/task', 
            icon: 'T' 
          }, 
          { 
            name: 'Task 2',
            link:'/task', 
            icon: 'T' 
          }
        ] 
      }
    ]
  },

];



/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  isSideNavOpen = true;
  selectedDrawer:number = 0;

  constructor(public dialog: MatDialog, private navigationService: NavigationService , private  releaseService : ReleaseService) {
    this.dataSource.data = TREE_DATA;
    
  }
  
  private _transformer = (node: Data, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

 

  hasChild = (_: number, node: FlatNode) => node.expandable;

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  openSidenav() {
    this.isSideNavOpen = true;
    
  }

  onImpediments() {
    this.isSideNavOpen = false;
  }

  onIssue() {
    this.isSideNavOpen = false;
  }

  release : Release[] ;

  ngOnInit(): void {
    this.getAllRelease();

  }

  // ------------Get Releases --------------
  private getAllRelease() {
    this.releaseService.getRelease().subscribe(data => {
      this.release = data;
      console.log(data)
    })
  }
}
