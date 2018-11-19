import  * as ScoreBoard  from './todo.actions';

export const initialState = [];

export function todoReducer(state = initialState, action: ScoreBoard.ActionsUnion) {
  switch (action.type) {
    case ScoreBoard.ActionTypes.Add:
      return state.concat(action.payload);

    case ScoreBoard.ActionTypes.Remove:
      return state;

    default:
      return state;
  }
}
