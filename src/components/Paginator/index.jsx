import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, getAmount } from 'redux/actions/UserActions';
import './Paginator.css';
import { _limitPerPage } from 'redux/actions/UserActions';

const Paginator = () => {

    const dispatch = useDispatch();
    const { amount, filter } = useSelector(state => state.user);
    const { _page, q } = filter;

    useEffect(() => {
        dispatch(getAmount(q));
    }, [dispatch, q])

    const listBtns = useMemo(() => {
        const numberOfPages = amount / _limitPerPage;

        let btns = [];
        for (let i = 0; i < numberOfPages; i++) {
            btns.push(i + 1);
        }

        return btns;
    }, [amount]);

    const handlePageChange = (page) => {
        dispatch(changePage(page, q));
    }

    return (
        <div className='btn-container'>
            <button className='prev-btn'>Prev</button>
            {
                listBtns.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`page-btn ${page === _page ? 'active-btn' : null}`}
                    >
                        {page}
                    </button>
                ))
            }
            <button className='next-btn'>Next</button>
        </div>
    )
}

export default Paginator;
