import { getStories, requestJobStories } from '../api';
import ArticleListSkeleton from '../components/articles/list-skeleton';

export default [
  {
    component: import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo }: any) => {
      const topStories = await requestJobStories();
      updateSeo({
        title: 'Jobs - Page 1 - Hacker news jobs - HN ReactPWA',
      });
      return {
        allStoriesIds: topStories,
        currentPage: 1,
        stories: await getStories(topStories, 0, 10),
        urlPrefix: '/jobs-hacker-news/',
      };
    },
    path: '/jobs-hacker-news',
    skeleton: ArticleListSkeleton,
  },
  {
    component: import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo, match }: any) => {
      const page = parseInt(match.params.page, 10);
      const topStories = await requestJobStories();
      updateSeo({
        title: `Jobs - Page ${page} - Hacker news jobs - HN ReactPWA`,
      });
      return {
        allStoriesIds: topStories,
        currentPage: page,
        stories: await getStories(topStories, (page - 1) * 10, 10),
        urlPrefix: '/jobs-hacker-news/',
      };
    },
    path: '/jobs-hacker-news/page/:page',
    skeleton: ArticleListSkeleton,
  },
];
