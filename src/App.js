import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

import './App.css';
import {giveMeMyBooks} from "./actions";

function Publication({book}) {
    return (
        <Typography
            component="span"
            variant="body2"
            color="textPrimary"
        >
            Published:
            {book.book_publication_year}, {book.book_publication_city} {book.book_publication_country}
        </Typography>
    )
}

function BookDetails({book}) {
    return (
        <>
            <Typography
                component="span"
                variant="h5"
                color="textPrimary"
            >
            {book.book_author}
            </Typography>
            <br />
            <Publication book={book}/>
            <Typography component="span"
                variant="body2"
                color="textPrimary"
            >
                <br />
                Pages:
                {book.book_pages}
            </Typography>
        </>
    )
}

function BasicPagination({pages, page}) {
    return (
        <div>
            <Pagination count={pages} color="primary" page={page}/>
        </div>
    );
}

function Books() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);
    const pages = useSelector(state =>state.pages );

    let { page } = useParams();
    page = parseInt(page || 1);

    useEffect(() => {
        dispatch(giveMeMyBooks({page}))
    }, [dispatch, page])

    return (
        <div className="Books">
            <List>
                {books.map(item => (
                    <ListItem key={item.id}>
                        <ListItemText primary={item.book_title} secondary={<BookDetails book={item}/>}/>
                    </ListItem>
                ))}
            </List>
            <BasicPagination pages={pages} page={page}/>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:page">
                    <Books />
                </Route>
                <Route path="/">
                    <Books />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
