import * as React from 'react';
import { withRouter } from 'react-router';
import ArticleStyles from '../articles/styles.scss';
import Header from '../header';
import styles from './shell.scss';

export default withRouter((props: any): JSX.Element => {
  return (
    <div>
      <header>
        <Header currentUrl={props.location.pathname} />
      </header>
      <main className={styles.container}>
        {props.children}
      </main>
      <footer className={ArticleStyles.container}>
        <div className={ArticleStyles.credit}>
          Created with &hearts; with&nbsp;
          <a
            href="https://www.reactpwa.com"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            ReactPWA
          </a>
          &nbsp;
        </div>
      </footer>
    </div>
  );
});
