import axios from "axios";

const ITEMS_PER_PAGE = 20;

function fetchData({itemsPerPage, page}) {
    page = page || 1;
    itemsPerPage = itemsPerPage || ITEMS_PER_PAGE;
    return axios.post(
        'http://nyx.vima.ekt.gr:3000/api/books',
        {
            itemsPerPage: itemsPerPage,
            page: page,
        }
    );
}

export function giveMeMyBooks() {
    return function (dispatch) {
        return fetchData({page :1, itemsPerPage: ITEMS_PER_PAGE}).then(
            result => dispatch( storeBooks(result.data.books, Math.ceil(result.data.count / ITEMS_PER_PAGE))),
            error => dispatch(setError('Oops, something went wrong'))
        )
    }
}

function storeBooks(books, pages) {
    return {
        type: 'STORE_BOOKS',
        books,
        pages
    }
}

function setError(errorMessage) {
    return {
        type: 'SET_ERROR',
        errorMessage
    }
}
