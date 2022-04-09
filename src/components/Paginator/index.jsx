import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, getAmount } from 'redux/actions/UserActions';
import './Paginator.css';
import { _limitPerPage } from 'redux/actions/UserActions';

const Paginator = () => {

    const dispatch = useDispatch();
    const { amount, filter } = useSelector(state => state.user);
    const { _page, q } = filter;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getAmount(q));
    }, [dispatch, q]);

    const numberOfPages = useMemo(() => {
        return Math.ceil(amount / _limitPerPage);
    }, [amount]);

    const listBtns = useMemo(() => {
        let btns = [];
        for (let i = 0; i < numberOfPages; i++) {
            btns.push(i + 1);
        }

        return btns;
    }, [amount]);

    const handlePageChange = (page) => {
        if (page < 1) {
            return;
        }
        if (page > numberOfPages) {
            return;
        }
        dispatch(changePage(page, q));
        setCurrentPage(page);
    }

    return (
        <div className='btn-container'>
            <button
                className='prev-btn'
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Prev
            </button>
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
            <button
                className='next-btn'
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div >
    )
}

export default Paginator;
