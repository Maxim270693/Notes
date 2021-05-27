import {pinTaskAC, TasksType} from "../main/bll/reducers";
import React, {FC} from "react";
import {useDispatch} from "react-redux";
import {EditableSpan} from "./EditableSpan";
import pinIcon from "../img/pinIcon.png";

type PropsTaskType = {
    task: TasksType,
    removeTaskHandler: (id: string, isPined: boolean) => void
    onChangeTaskTitle: (id: string, title: string) => void
    isPined?: boolean

}
export const Task: FC<PropsTaskType> = React.memo(({task, removeTaskHandler, onChangeTaskTitle, isPined = false}) => {
    const dispatch = useDispatch()
    const handlerPined = () => {
        dispatch(pinTaskAC(task.id, task))
    }


    const onClickHandler = () => removeTaskHandler(task.id, isPined)

    return <div className='icons'>
        <div className='icons-blocks'>
            <EditableSpan title={task.title} id={task.id} task={task}
                          onChangeTaskTitle={onChangeTaskTitle}/>
            <div className='icons-block'>
                <div className='icons-block-pin'>
                    <button className='pin-icon-btn' onClick={handlerPined}>
                        <img src={pinIcon} className='pin-icon' alt='pinIcon'/>
                    </button>
                </div>
                <div className='icons-block-delete'>
                    <button className='delete-icon' onClick={onClickHandler}>X</button>
                </div>
            </div>
        </div>

    </div>
})
