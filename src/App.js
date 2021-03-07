import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './App.css';
import {giveMeMyBooks} from "./actions";

function App() {

    const dispatch = useDispatch();
    const books = useSelector(state => state.books)

    useEffect(() => {
        dispatch(giveMeMyBooks())
    }, [dispatch])


    return (
        <div className="App">
            <ul>
                {books.map(item => (
                    <li key={item.id}>
                        <p>{item.book_author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
