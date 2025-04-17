import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './Component/add/add.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

const routes:Routes = [{
  path:"",
  component:AddComponent
}]

@NgModule({
  declarations: [
    AddComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AddModule { }
