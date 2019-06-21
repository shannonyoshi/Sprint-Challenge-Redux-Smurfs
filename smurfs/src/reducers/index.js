import {
  FETCH_SMURFS_FAILURE,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  ADD_SMURF_FAILURE,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_START
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: "",
        fetchingSmurfs: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: "",
        smurfs: action.payload,
        fetchingSmurfs: false
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case ADD_SMURF_START:
      return {
        ...state,
        error: "",
        addingSmurf: true
      };
      case ADD_SMURF_SUCCESS:
      return{
        ...state,
        error: "",
        smurfs: action.payload,
        addingSmurf: false
      }
      case ADD_SMURF_FAILURE:
      return{
        ...state,
        error: action.payload,
        addingSmurf: false
      }
    default:
      return state;
  }
};

export default rootReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
