import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {Observable} from "rxjs/index";
import { Add, Remove } from '../root-store/toDoList/todo.actions';

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
  toDoList$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private store: Store<{toDo:any[]}>) {
    this.toDoList = [];
    this.doneList = [];
    this.submitted = false;
    this.toDoList$ = store.pipe(select('toDo'));

  }
  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.toDoControl = this.formBuilder.group({
      task: ['', Validators.compose([Validators.minLength(3), Validators.required])],
    });
  };

  get f() { return this.toDoControl.controls }

  submitForm():void {
    this.submitted = true;
    if (this.toDoControl.invalid) {
      return;
    }
    this.toDoList.push({ ...this.toDoControl.value, status: 'not done' });
    this.addToDo({...this.toDoControl.value, status: 'not done'});
    this.toDoControl.reset();
    this.submitted = false;
  }

  addToDo(obj) {
    this.store.dispatch(new Add( obj));
  }

  doneTask(item: {}, i: number):void {
    this.doneList.push({...item, status:'done'});
    this.toDoList.splice(i,1);
  }
}
