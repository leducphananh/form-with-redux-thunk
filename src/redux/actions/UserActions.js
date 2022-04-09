export const _limitPerPage = 3;

export const getUsers = () => async dispatch => {
    try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { REACT_APP_API_URL } = process.env;
        const response = await fetch(`${REACT_APP_API_URL}?_page=1&_limit=${_limitPerPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const users = await response.json();
        dispatch({
            type: 'FETCH_SUCCESS',
            payload: users
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'FETCH_ERROR',
            message: error
        });
    }
}

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    }
}

export const addUser = (user) => async dispatch => {
    try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { REACT_APP_API_URL } = process.env;
        await fetch(REACT_APP_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });

        dispatch({
            type: 'ADD_USER'
        });

        dispatch(getUsers());
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'FETCH_ERROR',
            message: error
        });
    }
}

export const updateUser = (user) => async dispatch => {
    try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { REACT_APP_API_URL } = process.env;
        await fetch(REACT_APP_API_URL + '/' + user.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });

        dispatch({
            type: 'UPDATE_USER'
        });

        dispatch(getUsers());
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'FETCH_ERROR',
            message: error
        });
    }
}

export const deleteUser = (id) => async dispatch => {
    try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { REACT_APP_API_URL } = process.env;
        await fetch(REACT_APP_API_URL + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        dispatch({
            type: 'DELETE_USER'
        });

        dispatch(getUsers());
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'FETCH_ERROR',
            message: error
        });
    }
}

export const resetUser = () => {
    return {
        type: 'RESET_USER',
    }
}

export const changeSearchTerm = (searchTerm) => async dispatch => {
    try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { REACT_APP_API_URL } = process.env;
        const response = await fetch(`${REACT_APP_API_URL}?q=${searchTerm}&_page=1&_limit=${_limitPerPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const users = await response.json();

        dispatch({
            type: 'CHANGE_SEARCH',
            payload: {
                searchTerm,
                page: 1
            }
        });

        getAmount(searchTerm);

        dispatch({
            type: 'FETCH_SUCCESS',
            payload: users
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'FETCH_ERROR',
            message: error
        });
    }
}

export const changePage = (page, q) => async dispatch => {
    try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { REACT_APP_API_URL } = process.env;
        const response = await fetch(`${REACT_APP_API_URL}?q=${q}&_page=${page}&_limit=${_limitPerPage}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const users = await response.json();

        dispatch({
            type: 'CHANGE_PAGE',
            payload: page
        });

        dispatch({
            type: 'FETCH_SUCCESS',
            payload: users
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'FETCH_ERROR',
            message: error
        });
    }
}

export const getAmount = (q) => async dispatch => {
    try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { REACT_APP_API_URL } = process.env;
        const response = await fetch(`${REACT_APP_API_URL}?q=${q}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const users = await response.json();
        dispatch({
            type: 'CHANGE_AMOUNT',
            payload: users.length
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'FETCH_ERROR',
            message: error
        });
    }
} 
