import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as React from 'react';
import { getStories } from '../../api';
import ArticleListItem from '../articles/item';
import ArticleListItemSkeleton from '../articles/item-skeleton';

import UserStyles from './styles.scss';

dayjs.extend(relativeTime);
const { useState, useEffect } = React;

export default (props: any) => {
  const { created, id, karma, submitted } = props.loadedData;
  const [stories, setStories] = useState([]);
  const [storiesLoaded, setStoriesLoaded] = useState(false);
  let mounted = true;

  useEffect(() => {
    setStories([]);
    setStoriesLoaded(false);
    (async () => {
      const userStories = await getStories(submitted, 0, 50);
      if (mounted) {
        setStories(userStories);
        setStoriesLoaded(true);
      }
    })();
    return () => {
      mounted = false;
    };

  }, [id]);

  const renderArticlesSkeleton = (times: number = 10) => {
    const articles = [];
    for (let i = 0; i < times; i += 1) {
      articles.push(<ArticleListItemSkeleton key={`skeleton_${i}`}/>);
    }
    return articles;
  };

  const renderArticles = () => {
    if (!storiesLoaded) {
      return renderArticlesSkeleton(3);
    }

    if (!stories.filter(s => s && s.type && s.type === 'story').length) {
      return <i style={{ textAlign: 'center', display: 'block' }}>User has not published any stories recently <br /><br />¯\_(๑❛ᴗ❛๑)_/¯</i>;
    }

    return stories.map((articleData: any, index: number) => {
      if (!articleData || !articleData.id || articleData.type !== 'story') return null;

      return (
        <ArticleListItem
          key={`article_id_${articleData.id}`}
          {...articleData}
        />
      );
    });

  };

  return (
    <div>
      <h1 className={UserStyles.title}>{id}</h1>
      <h2>Karma: <span className={UserStyles.karma}>{karma}</span></h2>
      <small className={UserStyles.small}>
        member since&nbsp;
        <span className={UserStyles.since}>{dayjs(created * 1000).format('MMMM D, YYYY')}</span>
      </small>
      <hr />
      <h3 className={`${UserStyles.small} ${UserStyles.center}`}>Latest stories by {id}</h3>
      <ul>
        {renderArticles()}
      </ul>
    </div>
  );
};
