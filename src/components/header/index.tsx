import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';

interface IHeaderProps {
  currentUrl: string,
};

export default (props: IHeaderProps) => {
  const { currentUrl } = props;
  return (
    <div className={styles.nav}>
      <ul>
        <li className={currentUrl === '/' ? styles.active : ''}>
          <Link to='/'>Top</Link>
        </li>
        <li className={currentUrl === '/new' ? styles.active : ''}>
          <Link to='/new'>New</Link>
        </li>
        <li className={currentUrl === '/show' ? styles.active : ''}>
          <Link to='/show'>Show</Link>
        </li>
        <li className={currentUrl === '/ask' ? styles.active : ''}>
          <Link to='/ask'>Ask</Link>
        </li>
        <li className={currentUrl === '/jobs' ? styles.active : ''}>
          <Link to='/jobs'>Jobs</Link>
        </li>
      </ul>
    </div>
  );
}