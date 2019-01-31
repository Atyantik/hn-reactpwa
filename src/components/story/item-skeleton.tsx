import * as React from 'react';
import UserSkeletonStyles from './skeleton-styles.scss';

export default (props: any) => {
  return (
    <div className={UserSkeletonStyles.container}>
      <span className={UserSkeletonStyles.title} />
      <h2>Karma: <span className={UserSkeletonStyles.index} /></h2>
      <small>
        member since&nbsp;
        <span className={UserSkeletonStyles.date} />
      </small>
    </div>
  );
};
