
import {SHOW_LOADER, HIDE_LOADER} from '../actions/actions';

const initialState = {
  loading: false,
  error: false,
};

export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true};
    case HIDE_LOADER:
      return {...state, loading: false};
    default:
      return state;
  }
}
