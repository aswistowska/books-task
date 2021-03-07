import Typography from "@material-ui/core/Typography";
import React from "react";

export function Publication({book_publication_year, book_publication_city, book_publication_country}) {
    return (
        <Typography
            component="span"
            variant="body2"
            color="textPrimary"
        >
            Published:
            {book_publication_year}, {book_publication_city} {book_publication_country}
        </Typography>
    )
}
