import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';

interface IHeaderProps {
  currentUrl: string;
}

export default (props: IHeaderProps) => {
  const { currentUrl } = props;

  const isHomePage = () => {
    return (
      currentUrl.startsWith('/') && currentUrl.length === 1
      || currentUrl.startsWith('/page')
    );
  };
  const isNewsPage = () => {
    return currentUrl.startsWith('/new-stories-hacker-news');
  };
  const isShowPage = () => {
    return currentUrl.startsWith('/show-hn-hacker-news');
  };
  const isAskPage = () => {
    return currentUrl.startsWith('/ask-hn-hacker-news');
  };
  const isJobPage = () => {
    return currentUrl.startsWith('/jobs-hacker-news');
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={isHomePage() ? styles.active : ''}>
          <Link to="/">Top</Link>
        </li>
        <li className={isNewsPage() ? styles.active : ''}>
          <Link to="/new-stories-hacker-news">New</Link>
        </li>
        <li className={isShowPage() ? styles.active : ''}>
          <Link to="/show-hn-hacker-news">Show</Link>
        </li>
        <li className={isAskPage() ? styles.active : ''}>
          <Link to="/ask-hn-hacker-news">Ask</Link>
        </li>
        <li className={isJobPage() ? styles.active : ''}>
          <Link to="/jobs-hacker-news">Jobs</Link>
        </li>
      </ul>
    </nav>
  );
};
