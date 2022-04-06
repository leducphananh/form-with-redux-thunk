import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchTerm } from 'redux/actions/UserActions';
import './Search.css';

const Search = () => {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            dispatch(changeSearchTerm(value));
        }, 300);
    }

    return (
        <form className='search-form'>
            <label htmlFor='search-term' className='search-form__label'>Search User</label>
            <input
                value={searchTerm}
                onChange={handleSearchTermChange}
                id='search-term'
                className='search-form__input'
                autoComplete='off'
            />
        </form >
    )
}

export default Search;