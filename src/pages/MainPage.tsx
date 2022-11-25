import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {POSTS_ROUTE, USERS_ROUTE} from "../router/routes";

const MainPage: FC = () => {
    return (
        <div>
            <h1>Main page</h1>
            <ul>
                <li>
                    <Link to={USERS_ROUTE}>Users</Link>
                </li>
                <li>
                    <Link to={POSTS_ROUTE}>Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default MainPage;