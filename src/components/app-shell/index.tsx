import * as React from 'react';
import { withRouter } from 'react-router';
import Header from '../header';
import styles from './shell.scss';

export default withRouter((props: any): JSX.Element => {
  return (
    <header>
      <Header currentUrl={props.location.pathname} />
      <main className={styles.container}>
        {props.children}
      </main>
    </header>
  );
});
