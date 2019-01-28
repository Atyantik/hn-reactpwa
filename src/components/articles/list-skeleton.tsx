import * as React from 'react';
import { withRouter } from 'react-router';
import ArticleListItemSkeleton from './item-skeleton';
import ArticleStyles from './styles.scss';

export default withRouter((props: any) => {
  const { match: { params: { page } } } = props;

  const renderArticlesSkeleton = (times: number = 10) => {
    const articles = [];
    for (let i = 0; i < times; i += 1) {
      articles.push(<ArticleListItemSkeleton key={`skeleton_${i}`}/>);
    }
    return articles;
  };

  return (
    <div className={ArticleStyles.container}>
      <nav className={ArticleStyles.nav}>
        <span className={`${ArticleStyles.prev} ${ArticleStyles.blink}`}>&lt; prev</span>
        <span className={ArticleStyles.blink}>&nbsp;{page || 1} &nbsp;</span>
        <span className={`${ArticleStyles.next} ${ArticleStyles.blink}`}>next &gt;</span>
      </nav>
      <ul>
        {renderArticlesSkeleton()}
      </ul>
    </div>
  );
});
