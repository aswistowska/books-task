import React from "react";
import Typography from "@material-ui/core/Typography";

import {Publication} from "./Publication";

export function BookDetails({book}) {
    return (
        <>
            <Typography
                component="span"
                variant="h6"
                color="textSecondary"
            >
                {book.book_author}
            </Typography>
            <br/>
            <Publication {...book}/>
            <Typography component="span"
                        variant="body2"
                        color="textPrimary"
            >
                <br/>
                Pages:
                {book.book_pages}
            </Typography>
        </>
    )
}
