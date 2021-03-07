import Typography from "@material-ui/core/Typography";
import React from "react";

export function BookTitle({book}) {
    return (
        <Typography
            component="span"
            variant="h5"
            color="textPrimary"
        >
            {book.book_title}
        </Typography>
    )
}
