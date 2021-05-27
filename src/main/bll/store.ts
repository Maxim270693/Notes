import {applyMiddleware, combineReducers, createStore} from "redux";
import {notesReducer} from "./reducers";
import thunk from "redux-thunk"
import {loadState, saveState} from "../../utils/localStorage-utils";

const rootReducer = combineReducers({
    notes: notesReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        notes: store.getState().notes
    })
})

export type RootStateType = ReturnType<typeof rootReducer>