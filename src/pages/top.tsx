import { getStories, requestTopStories } from '../api';
import ArticleListSkeleton from '../components/articles/list-skeleton';

export default [
  {
    component: import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo }: any) => {
      const topStories = await requestTopStories();
      updateSeo({
        title: 'Top stories - Page 1 - Hacker news - HN ReactPWA',
      });
      return {
        allStoriesIds: topStories,
        currentPage: 1,
        stories: await getStories(topStories, 0, 10),
        urlPrefix: '/',
      };
    },
    path: '/',
    skeleton: ArticleListSkeleton,
  },
  {
    component: import('../components/articles'),
    // component: ArticleListSkeleton,
    exact: true,
    loadData: async ({ updateSeo, match }: any) => {
      const page = parseInt(match.params.page, 10);
      const topStories = await requestTopStories();
      updateSeo({
        title: `Top stories - Page ${page} - Hacker news - HN ReactPWA`,
      });
      return {
        allStoriesIds: topStories,
        currentPage: page,
        stories: await getStories(topStories, (page - 1) * 10, 10),
        urlPrefix: '/',
      };
    },
    path: '/page/:page',
    skeleton: ArticleListSkeleton,
  },
];
