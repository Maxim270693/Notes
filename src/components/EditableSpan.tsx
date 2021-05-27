import React, {ChangeEvent, useState} from "react";
import {TasksType} from "../main/bll/reducers";
// @ts-ignore
import ReactHashtag from "react-hashtag";

type EditablePropsType = {
    title: string
    id: string
    task: TasksType
    onChangeTaskTitle: (id: string, title: string) => void
}

export const EditableSpan = React.memo((props: EditablePropsType) => {
    console.log('EDITABLESPAN')
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('')

    const activateEditMode = (id: string) => {
        setEditMode(true)
        setTitle(props.title)
    }
    const deactivateEditMode = (id: string) => {
        props.onChangeTaskTitle(id, title)
        setEditMode(false)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return editMode
        ? <input className='todo-row' value={title} onChange={onChangeTitleHandler}
                 onBlur={() => deactivateEditMode(props.id)} autoFocus/>
        : <span className='todo-row' onDoubleClick={() => activateEditMode(props.id)}>
            <ReactHashtag className='hashtag' onHashtagClick={() => alert('hello')}>
                {props.title}
            </ReactHashtag>
    </span>
})