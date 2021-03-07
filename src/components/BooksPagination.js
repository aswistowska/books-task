import Pagination from "@material-ui/lab/Pagination";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";

import {useHistory} from "react-router-dom";

export function BooksPagination({pages, page}) {
    const largeScreen = useMediaQuery('(min-width:600px)');
    let history = useHistory();

    function handlePageChange(event, page) {
        history.push(`/${page}`);
    }

    return (
        <div>
            <Pagination
                count={pages}
                color="primary"
                page={page}
                onChange={handlePageChange}
                siblingCount={largeScreen ? 2 : 0}/>
        </div>
    );
}
