import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

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

function App() {

    const dispatch = useDispatch();
    const books = useSelector(state => state.books)

    useEffect(() => {
        dispatch(giveMeMyBooks())
    }, [dispatch])

    return (
        <div className="App">
            <List>
                {books.map(item => (
                    <ListItem key={item.id}>
                        <ListItemText primary={item.book_title} secondary={<BookDetails book={item}/>}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default App;
