import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {POSTS_ROUTE, USERS_ROUTE} from "../../router/routes";
import styles from './MainPage.module.css';

const MainPage: FC = () => {
    return (
        <main className={styles.container}>
            <nav>
              <ul className={styles.linksList}>
                <li className={styles.linkItem}>
                  <Link to={USERS_ROUTE} className={styles.link}>Users</Link>
                </li>
                <li className={styles.linkItem}>
                  <Link to={POSTS_ROUTE} className={styles.link}>Posts</Link>
                </li>
              </ul>
            </nav>
        </main>
    );
};

export default MainPage;
