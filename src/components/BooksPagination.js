import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import {useHistory} from "react-router-dom";


export function BooksPagination({pages, page}) {
    let history = useHistory();

    function handlePageChange(event, page) {
        history.push(`/${page}`);
    }

    return (
        <div>
            <Pagination count={pages} color="primary" page={page} onChange={handlePageChange} siblingCount={2}/>
        </div>
    );
}
