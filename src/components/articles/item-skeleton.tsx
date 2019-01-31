import * as React from 'react';
import ArticleSkeletonStyles from './skeleton-styles.scss';

export default () => {
  return (
    <li className={ArticleSkeletonStyles.container}>
      <section>
        <div>
          <span className={ArticleSkeletonStyles.index}/>
          <span className={ArticleSkeletonStyles.title} />
        </div>
        <div>
          <span className={ArticleSkeletonStyles.by} />
          <span className={ArticleSkeletonStyles.link} />
          <span className={ArticleSkeletonStyles.date} />
          <span className={ArticleSkeletonStyles.link} />
        </div>
      </section>
    </li>
  );
};
