import * as React from 'react';
import { Link } from 'react-router-dom';
import { getStories } from '../../api';
import ArticleListItem from './item';
import ArticleStyles from './styles.scss';

const { useEffect } = React;

interface IArticleListProps extends React.ReactPropTypes {
  loadedData: any;
}

export default (props: IArticleListProps) => {
  const { stories, allStoriesIds, currentPage, urlPrefix } = props.loadedData;
  const limit: number = 10;
  const hasPrevious = currentPage > 1;
  const maxPages = parseInt(`${allStoriesIds.length / limit}`, 10);
  const hasNext = currentPage < maxPages;

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleCallbackId = window.requestIdleCallback(
        () => getStories(allStoriesIds, (currentPage) * 10, 10),
      );
      return () => {
        window.cancelIdleCallback(idleCallbackId);
      };
    }
  }, [
    currentPage,
    hasNext,
  ]);

  const renderPrevious = () => {
    if (hasPrevious) {
      return (
        <Link to={`${urlPrefix}page/${currentPage - 1}`} className={ArticleStyles.prev}>
          &lt; prev
        </Link>
      );
    }
    return (
      <span className={ArticleStyles.prev}>
        &lt; prev
      </span>
    );
  };

  const renderNext = () => {
    if (hasNext) {
      return (
        <Link to={`${urlPrefix}page/${currentPage + 1}`} className={ArticleStyles.next}>
          next &gt;
        </Link>
      );
    }
    return (
      <span className={ArticleStyles.next}>
        next &gt;
      </span>
    );
  };

  const renderArticles = () => {
    return stories.map((articleData: any, index: number) => (
        <ArticleListItem
          key={`article_id_${articleData.title}`}
          index={(currentPage - 1) * limit + index + 1}
          {...articleData}
        />
      ),
    );
  };

  return (
    <div className={ArticleStyles.container}>
      <nav className={ArticleStyles.nav}>
        {renderPrevious()}
        <span>{currentPage}/{maxPages}</span>
        {renderNext()}
      </nav>
      <ul>
        {renderArticles()}
      </ul>
    </div>
  );
};
