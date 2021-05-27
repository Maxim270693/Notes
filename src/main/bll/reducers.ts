import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./store";
import {Api} from "../dal/API";

export type TasksType = {
    id: string
    title: string
}
export type initialStateType = {
    tasks: Array<TasksType>
    pinnedTasks: Array<TasksType>
    searchValue: string
    searchTag: Array<string>
    editMode: boolean
    title: string
}
const initialState: initialStateType = {
    tasks: [],
    pinnedTasks: [],
    searchValue: '',
    searchTag: [],
    editMode: false,
    title: ''
}

const GET_TASKS = "GET-TASKS"
const ADD_TASK = "ADD-TASK"
const DELETE_TASK = "DELETE-TASK"
const UPDATE_TASK = "UPDATE-TASK"
const EDIT_MODE = "EDIT-MODE"
const PIN_TASK = "PIN_TASK"
const DELETE_PIN_TASK = "DELETE-PIN-TASK"
const SET_SEARCH_TASK = "SET-SEARCH-TASK"
const SET_SEARCH_HASHTAG_TASK = "SET-SEARCH-HASHTAG-TASK"
const SET_TITLE = "SET-TITLE"

export const notesReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case GET_TASKS:
            return {...state, tasks: action.payload}
        case ADD_TASK:
            return {...state, tasks: [action.payload, ...state.tasks]}
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter((task) => task.id !== action.id)}
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(t => t.id === action.id ? {...t, title: action.title} : t)
            }
        case PIN_TASK: {
            if( !state.tasks.find(t => t.id === action.id)) {
                const pinnedTasks = state.pinnedTasks.filter((t) => t.id !== action.id)
                return {...state, pinnedTasks: pinnedTasks, tasks: [action.task, ...state.tasks]}
            }
            const task = state.tasks.filter((t) => t.id !== action.id)
            return {...state, tasks: task, pinnedTasks: [action.task, ...state.pinnedTasks]}
        }
        case DELETE_PIN_TASK:
            return {...state, pinnedTasks: state.pinnedTasks.filter(pinTask => pinTask.id !== action.id)}
        case SET_SEARCH_TASK:
            return {...state, searchValue: action.title}
        case SET_SEARCH_HASHTAG_TASK:
            return {...state, searchTag: action.title.split(' ')}
        case EDIT_MODE:
            return {...state, editMode: action.editMode}
        case SET_TITLE:
            return {...state, title: action.title}
        default:
            return state
    }
}

// ActionCreators
export const getTaskAC = (payload: Array<TasksType>) => ({type: GET_TASKS, payload} as const)
export const addTaskAC = (payload: TasksType) => ({type: ADD_TASK, payload} as const)
export const deleteTaskAC = (id: string) => ({type: DELETE_TASK, id} as const)
export const updateTaskAC = (id: string, title: string) => ({type: UPDATE_TASK, id, title} as const)
export const editModeAC = (id: string, editMode: boolean) => ({type: EDIT_MODE, id, editMode} as const)
export const pinTaskAC = (id: string, task: TasksType) => ({type: PIN_TASK, id, task} as const)
export const deletePinTaskAC = (id: string) => ({type: DELETE_PIN_TASK, id} as const)
export const searchValueAC = (title: string) => ({type: SET_SEARCH_TASK, title} as const)
export const searchValueHashtagAC = (title: string) => ({type: SET_SEARCH_HASHTAG_TASK, title} as const)
export const setTitleAC = (title: string) => ({type: SET_TITLE, title} as const)


//ThunkCreators
export const getTaskTC = () => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
    Api.getTasks()
        .then((res) => {
            dispatch(getTaskAC(res))
        })
}
export const addTaskTC = (data: any) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
    Api.postTask(data)
        .then((res) => {
            dispatch(addTaskAC(data))
        })
}
export const updateTaskTC = (id: string, title: string) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
    Api.putTask({id,title})
        .then((res) => {
            dispatch(updateTaskAC(id,title))
        })
}
export const deleteTaskTC = (id: string) => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
    Api.deleteTask(id)
        .then((res) => {
            dispatch(deleteTaskAC(id))
        })
}


type GetTasksActionType = ReturnType<typeof getTaskAC>
type AddTaskActionType = ReturnType<typeof addTaskAC>
type DeleteTaskActionType = ReturnType<typeof deleteTaskAC>
type UpdateTaskActionType = ReturnType<typeof updateTaskAC>
type EditModeActionType = ReturnType<typeof editModeAC>
type PinTaskActionType = ReturnType<typeof pinTaskAC>
type DeletePinTaskActionType = ReturnType<typeof deletePinTaskAC>
type SearchValueActionType = ReturnType<typeof searchValueAC>
type SearchValueHashtagActionType = ReturnType<typeof searchValueHashtagAC>
type SetTitleActionType = ReturnType<typeof setTitleAC>


type ActionType = GetTasksActionType | AddTaskActionType
    | DeleteTaskActionType | UpdateTaskActionType
    | EditModeActionType | PinTaskActionType
    | SetTitleActionType | SearchValueActionType
    | DeletePinTaskActionType | SearchValueHashtagActionType