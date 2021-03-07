const initialState = {
    books: [],
    pages: 0,
};

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'STORE_BOOKS': {
            return {
                ...state,
                books: action.books,
                pages: action.pages
            }
        }
        default:
            return state
    }
}
