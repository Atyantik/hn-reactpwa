import React from 'react';
import { withRouter } from 'react-router';
import Header from '../header';
import styles from './shell.scss';

interface IProps {
    children: React.ReactChildren,
    location: {
        pathname: string
    }
};
export default withRouter((props: IProps) => {
    return (
        <div>
            <Header currentUrl={props.location.pathname} />
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    );
});