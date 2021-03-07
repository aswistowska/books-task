const initialState = {
    books: []
};

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'STORE_BOOKS': {
            return {
                ...state,
                books: action.books
            }
        }
        default:
            return state
    }
}
