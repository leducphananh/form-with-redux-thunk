const initialState = {
    listUsers: [],
    user: {
        id: null,
        name: '',
        gender: 'Male',
        dob: '',
        phone: '',
        email: '',
        address: '',
        description: '',
        courses: [],
    },
    loading: true,
    message: null,
    filter: {
        _page: 1,
        q: '',
    },
    amount: 0,
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                listUsers: action.payload,
            }
        case 'CHANGE_AMOUNT':
            return {
                ...state,
                amount: action.payload,
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                message: action.message,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'ADD_USER':
            return {
                ...state,
                loading: false,
            }
        case 'UPDATE_USER':
            return {
                ...state,
                loading: false,
            }
        case 'DELETE_USER':
            return {
                ...state,
                loading: false,
            }
        case 'RESET_USER':
            return {
                ...state,
                user: {
                    id: null,
                    name: '',
                    gender: 'Male',
                    dob: '',
                    phone: '',
                    email: '',
                    address: '',
                    description: '',
                    courses: [],
                },
            }
        case 'CHANGE_SEARCH':
            return {
                ...state,
                loading: false,
                filter: {
                    ...state.filter,
                    q: action.payload.searchTerm,
                    _page: action.payload.page,
                }
            }
        case 'CHANGE_PAGE':
            return {
                ...state,
                loading: false,
                filter: {
                    ...state.filter,
                    _page: action.payload,
                }
            }
        default:
            return state;
    }
}

export default UserReducer;
