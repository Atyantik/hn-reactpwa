import * as React from 'react';
import ArticleListItem from './item';
import ArticleStyles from './styles.scss';
import { Link } from 'react-router-dom';
import { getStories as fetchStories } from '../../api';

const { useState, useEffect } = React;

export default (props: React.ReactPropTypes) => {
  const { stories, allStoriesIds, currentPage, urlPrefix } = props.loadedData;
  const [ stateStories, setStories ] = useState(stories);
  const hasPrevious = currentPage > 1;
  const maxPages = parseInt(`${allStoriesIds.length/10}`, 10);
  const hasNext = currentPage < maxPages;
  return (
    <div className={ArticleStyles.container}>
      <nav className={ArticleStyles.nav}>
        <span>
          {hasPrevious &&  (
            <Link to={`${urlPrefix}page/${currentPage - 1}`}>
              &lt; prev
            </Link>
          )}
        </span>
        <span>{currentPage}/{maxPages}</span>
        <span>
          {hasNext &&  (
            <Link to={`${urlPrefix}page/${currentPage + 1}`}>
              next &gt;
            </Link>
          )}
          
        </span>
      </nav>
      <ul>
        {stories.map(articleData => <ArticleListItem key={`article_id_${articleData.title}`} {...articleData} />)}
      </ul>
    </div>
  )
};
