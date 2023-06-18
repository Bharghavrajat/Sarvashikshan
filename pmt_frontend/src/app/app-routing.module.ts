import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SelectProjectComponent } from './select-project/select-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EpicComponent } from './epic/epic.component';
import { StoryComponent } from './story/story.component';
import { RetrospectionComponent } from './retrospection/retrospection.component';
import { ImpedimentsComponent } from './impediments/impediments.component';
import { IssueComponent } from './issue/issue.component';
import { CreateImpedimentsComponent } from './create-impediments/create-impediments.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { UpdateImpedimentsComponent } from './update-impediments/update-impediments.component';
import { OpenRetrospectionComponent } from './open-retrospection/open-retrospection.component';
import { EditRetrospectionComponent } from './edit-retrospection/edit-retrospection.component';


const routes: Routes = [
  {
    path:"", component:SignInComponent
  },
  {
    path:"sign-up", component:SignUpComponent
  },
  {
    path:"select-project",component:SelectProjectComponent
  },
  {
    path:"create-project",component:CreateProjectComponent
  },
  {
    path:"navigation",component:NavigationComponent
  },
  {
    path:"epic",component:EpicComponent
  },
  {
    path:"story",component:StoryComponent
  },
  {
    path:"retrospection",component:RetrospectionComponent
  },
  { 
    path: 'open-retrospection', component: OpenRetrospectionComponent 
  },
  { 
    path: 'edit-retrospection', component: EditRetrospectionComponent 
  },
  {
    path:"impediments",component:ImpedimentsComponent
  },
  {
    path:"issue",component:IssueComponent
  },
  { 
    path: 'create-impediments', component: CreateImpedimentsComponent 
  },
  { 
    path: 'create-issue', component: CreateIssueComponent 
  },
  { 
    path: 'update-impediments', component: UpdateImpedimentsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
