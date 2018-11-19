import { Action } from '@ngrx/store';

export enum ActionTypes {
  Add = '[Todo] Add',
  Remove = '[Todo] Remove',
}

export class Add implements  Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: { taskname: string, status: string} ) {}
}

export class Remove implements  Action {
  readonly type = ActionTypes.Remove
}


export type ActionsUnion = Add | Remove;
