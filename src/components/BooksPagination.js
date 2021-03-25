import Pagination from "@material-ui/lab/Pagination";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";

import {useHistory, withRouter} from "react-router-dom";

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

class BookPaginationClass extends React.Component {
    render() {
        const {history, pages, page, largeScreen} = this.props;

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
}

function withLargeScreen(Component) {
    function InnerComponent(props) {
        const largeScreen = useMediaQuery('(min-width:600px)');

        return <Component {...props} largeScreen={largeScreen}/>
    }
    return InnerComponent
}

export const BookPaginationClassWithRouter = withLargeScreen(withRouter(BookPaginationClass));
