export const user = (state: any = [], action) => {
    switch (action.type) {
        case 'ADD_USER_SUCCESS': {
            return { data: [...state.data, action.payload] }
        }
        case 'LOAD_USERS_SUCCESS': {
            return { ...state, data: action.payload }
        }
        case 'DELETE_USER_SUCCESS': {
            return {
                data: state.data.filter(user => {
                    return user.id !== action.payload.id;
                })
            };
        }
        case 'UPDATE_USERS_SUCCESS': {
            return {
                data: state.data.map((user) => {
                    return user.id === action.payload.user.id ? action.payload.user : user;
                })
            };  
        }
        default: {
            return state;
        }
    }
};
