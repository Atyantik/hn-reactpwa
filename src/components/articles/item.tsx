import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ArticleStyles from './styles.scss';

dayjs.extend(relativeTime);

export default (props: any) => {
  const { index, id, title, url, score, by, descendants, time, deleted } = props;

  const renderArticleTitle = () => {
    if (typeof url !== 'undefined') {
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener nofollow"
          className={ArticleStyles.link}
        >
          {title}
        </a>
      );
    }
    return (
      <Link to={`/story/${id}`} className={ArticleStyles.link}>
        {title}
      </Link>
    );
  };

  const renderIndex = () => {
    if (index) {
      return <span>{index}.&nbsp;</span>;
    }
    return null;
  };

  const renderCommentLink = () => {
    const count = descendants ? descendants : 0;
    return (
      <Link to={`/story/${id}`} className={ArticleStyles.link}>{count} comments</Link>
    );
  };

  if (!id || deleted) return null;

  return (
    <li className={ArticleStyles['article-container']}>
      <section>
        <div>
          {renderIndex()}
          {renderArticleTitle()}
        </div>
        <div className={ArticleStyles.meta}>
          {score} points by
          &nbsp;
          <Link to={`/user/${by}`} className={ArticleStyles.link}>{by}</Link>
          , {dayjs().to(dayjs(time * 1000))} |&nbsp;
          {renderCommentLink()}
        </div>
      </section>
    </li>
  );
};
