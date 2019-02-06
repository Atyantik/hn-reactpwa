import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { getStories } from '../../api';
import CommentStyles from './styles.scss';

dayjs.extend(relativeTime);
const { useState, useEffect } = React;

const COMMENT = (props: any) => {
  const { id } = props;
  const commentInit = {
    by: '',
    deleted: false,
    kids: [],
    text: '',
    time: 0,
  };
  const [comment, setComment] = useState({ ...commentInit });
  const [commentLoaded, setCommentLoaded] = useState(false);
  let mounted = true;

  useEffect(() => {
    setComment({ ...commentInit });
    setCommentLoaded(false);
    (async () => {
      const comments = await getStories([id], 0, 1);
      if (mounted) {
        setComment(comments[0]);
        setCommentLoaded(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [ // tslint:disable
    id,
  ]);

  const renderChildComments = () => {
    if (comment && comment.kids && comment.kids.length) {
      return comment.kids.map((kid: any) => (<COMMENT key={kid} id={kid}/>));
    }
  };
  if (!commentLoaded) {
    return (
      <div className={CommentStyles.comment}>
        <div className={CommentStyles['lds-ellipsis']}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
  if (!comment || comment.deleted) return null;

  return (
    <div className={CommentStyles.comment}>
      <div>
        <Link className={CommentStyles.link} to={`/user/${comment.by}`}>{comment.by}</Link>
        <small className={CommentStyles.meta}>({dayjs().to(dayjs(comment.time * 1000))})</small>
      </div>
      <div className={CommentStyles.text} dangerouslySetInnerHTML={{ __html: comment.text }} />
      <hr />
      <ul>
        {renderChildComments()}
      </ul>
    </div>
  );
};

export default COMMENT;
