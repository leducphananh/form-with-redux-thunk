import { getAllUsers } from 'services/UserServices';

export const loadUsersAsync = () => async dispatch => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
        const response = await getAllUsers();
        const users = response.data;
        dispatch({
            type: 'FETCH_SUCCESS',
            payload: users
        })
    } catch (error) {
        dispatch({
            type: 'FETCH_ERROR',
            message: error.message
        })
    }
}
