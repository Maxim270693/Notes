import React, {ChangeEvent, FC} from "react";
import search from '../img/search.png'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../main/bll/store";
import {searchValueAC} from "../main/bll/reducers";

type PropsType = {
    searchHandler: () => void
}

export const NotesSearch: FC<PropsType> = React.memo((props) => {

    const searchTitle = useSelector<RootStateType, string>((state) => state.notes.searchValue)
    const dispatch = useDispatch()


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => dispatch(searchValueAC(e.currentTarget.value))

    return (
        <div className="search">
         <span className="searchSpan">
          <img className='search-img' src={search} onClick={props.searchHandler} alt='search'/>
         </span>
            <input
                value={searchTitle}
                className="searchInput"
                type="text"
                onChange={onChangeHandler}
                placeholder='Search'
            />
        </div>
    )

})