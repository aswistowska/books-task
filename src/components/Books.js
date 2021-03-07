import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import {giveMeMyBooks} from "../actions";
import {BookDetails} from "./BookDetails";
import {BooksPagination} from "./BooksPagination";

import './Books.css';
import {BookTitle} from "./BookTitle";


export function Books() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);
    const pages = useSelector(state => state.pages);

    let {page} = useParams();
    page = parseInt(page || 1);

    useEffect(() => {
        dispatch(giveMeMyBooks({page}))
    }, [dispatch, page])

    return (
        <div className="books">
            <BooksPagination pages={pages} page={page}/>
            <List>
                {books.map(item => (
                    <ListItem key={item.id}>
                        <ListItemText primary={<BookTitle book={item}/>} secondary={<BookDetails book={item}/>}/>
                    </ListItem>
                ))}
            </List>
            <BooksPagination pages={pages} page={page}/>
        </div>
    )
}
