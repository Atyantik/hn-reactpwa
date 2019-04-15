import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Comment from '@components/comment/comment';
import StoryStyles from './styles.scss';

dayjs.extend(relativeTime);

export default (props: any) => {
  const { by, id, title, time, score, url, kids } = props.loadedData;

  const renderComments = () => {
    if (!kids || !kids.length) return null;
    return kids.map((kid: any) => (<Comment key={kid} id={kid} />));
  };

  return (
    <div>
      <h1 className={StoryStyles.title}>
        {title}
      </h1>
      <small>
        <a className={StoryStyles.link} href={url} target="_blank">
          {url}
        </a>
      </small>
      <br />
      <br />
      <div>
        <span className={StoryStyles.karma}>
          {score}
        </span> points, by&nbsp;
        <Link className={StoryStyles.link} to={`/user/${by}`}>{by}</Link>,&nbsp;
        {dayjs().to(dayjs(time * 1000))}
      </div>
      <hr />
      <h2>{kids && kids.length ? kids.length : 0} comments</h2>
      <div className={StoryStyles['comment-list']}>
        {renderComments()}
      </div>
    </div>
  );
};
