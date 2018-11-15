import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public toDoList: any[];
  public doneList: any[];
  toDoControl: FormGroup;
  public submitted: boolean;


  constructor(private formBuilder: FormBuilder) {
    this.toDoList = [];
    this.doneList = [];
    this.submitted = false;
  }
  ngOnInit() {
    this.toDoControl = this.formBuilder.group({
      task: ['', Validators.minLength(3)],
    });

  }

  get f() { return this.toDoControl.controls }

  submitForm() {
    this.submitted = true;
    if (this.toDoControl.invalid) {
      return;
    }
    this.toDoList.push({ ...this.toDoControl.value, status: 'not done' });
    this.toDoControl.reset();
  }

  doneTask(item: {}, i: number){
    this.doneList.push({...item, status:'done'});
    this.toDoList.splice(i,1);
  }

}
