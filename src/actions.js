import axios from "axios";

function fetchData() {
    return axios.post(
        'http://nyx.vima.ekt.gr:3000/api/books',
    );
}

export function giveMeMyBooks() {
    return function (dispatch) {
        return fetchData().then(
            result => dispatch( storeBooks(result.data.books)),
            error => dispatch(setError('Oops, something went wrong'))
        )
    }
}

function storeBooks(books) {
    return {
        type: 'STORE_BOOKS',
        books
    }
}

function setError(errorMessage) {
    return {
        type: 'SET_ERROR',
        errorMessage
    }
}
