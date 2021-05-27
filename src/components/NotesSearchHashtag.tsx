import React, {ChangeEvent, useState} from "react"
import search from "../img/search.png";
import {useDispatch} from "react-redux";
import {searchValueHashtagAC} from "../main/bll/reducers";


export const NotesSearchHashtag = React.memo(() => {
    const dispatch = useDispatch()

    const [title,setTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value === '') {
            dispatch(searchValueHashtagAC(''))
        }
        setTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if (title.trim() === '') {
            return;
        }
        dispatch(searchValueHashtagAC(title))
    }

    return(
        <div className="search">
         <span className="searchSpan">
          <img className='search-img' onClick={onClickHandler} src={search} alt='search'/>
         </span>
            <input
                value={title}
                className="searchInput"
                type="text"
                onChange={onChangeHandler}
                placeholder='SearchHashtag'
            />
        </div>
    )
})