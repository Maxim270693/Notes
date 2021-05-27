import React, {ChangeEvent, KeyboardEvent, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../main/bll/store";
import {
    addTaskTC,
    deletePinTaskAC,
    deleteTaskTC,
    getTaskTC,
    searchValueAC,
    setTitleAC,
    TasksType,
    updateTaskTC
} from "../main/bll/reducers";
import {v1} from "uuid";
import {NotesSearch} from "./NotesSearch";
import {Task} from "./Tasks";
import {NotesSearchHashtag} from "./NotesSearchHashtag";


export const Notes = React.memo(() => {

    const title = useSelector<RootStateType, string>((state) => state.notes.title)
    const tasks = useSelector<RootStateType, Array<TasksType>>((state) => state.notes.tasks)
    const searchTag = useSelector<RootStateType, Array<string>>(state => state.notes.searchTag)
    const pinnedTasks = useSelector<RootStateType, Array<TasksType>>((state) => state.notes.pinnedTasks)
    const searchTitle = useSelector<RootStateType, string>((state) => state.notes.searchValue)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTaskTC())
    }, [tasks,dispatch])

    let resultsSearchTask = !searchTitle
        ? tasks
        : tasks.filter(task =>
            task.title.toLowerCase().includes(searchTitle.toLocaleLowerCase())
        );

    if (searchTag.length) {
        resultsSearchTask = resultsSearchTask.filter((task) => {
            let resultFilter = true
            searchTag.forEach(tag => {
                resultFilter = resultFilter ? task.title.toLowerCase().includes(tag.toLocaleLowerCase()) : resultFilter
            })
            return resultFilter
        })
    }

    const searchHandler = useCallback(() => {
        if (searchTitle.trim() === '') {
            return;
        }
        dispatch(searchValueAC(searchTitle))
    }, [dispatch, searchTitle])

    const addTask = useCallback((title: string) => {
        if (title.trim() === '') {
            return;
        }
        dispatch(addTaskTC({id: v1(), title}))
        dispatch(setTitleAC(''))
    }, [dispatch])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(setTitleAC(e.currentTarget.value))
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            addTask(title.trim())
        }
    }

    const onChangeTaskTitle = useCallback((id: string, title: string) => {
        dispatch(updateTaskTC(id,title))
    }, [dispatch])

    const removeTaskHandler = useCallback((id: string, isPined = false) => {
        if (!isPined) {
            dispatch(deleteTaskTC(id))
        } else {
            dispatch(deletePinTaskAC(id))
        }
    }, [dispatch])

    return (
        <div className='notes-app'>
            <h1>Notes</h1>
            <NotesSearch searchHandler={searchHandler}/>
            <NotesSearchHashtag/>
            <div className='notes-form'>
                <div className='notes-wrapper'>
                    <input className='notes-input'
                           type='text'
                           value={title}
                           placeholder='Add notes'
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={() => addTask(title)} className='notes-button'>Add notes</button>
                </div>
                {
                    pinnedTasks.map((pinnedTask) => {
                        return <Task key={pinnedTask.id} task={pinnedTask} onChangeTaskTitle={onChangeTaskTitle}
                                     removeTaskHandler={removeTaskHandler} isPined={true}/>

                    })
                }
                {
                    tasks.length
                        ? <div className='notes-list'> {resultsSearchTask.map((task) => {
                            return <Task key={task.id} task={task} onChangeTaskTitle={onChangeTaskTitle}
                                         removeTaskHandler={removeTaskHandler}/>
                        }
                        )}
                        </div>
                        : <div className='notes-text'> The notes list is empty </div>
                }
            </div>
        </div>
    )
});

