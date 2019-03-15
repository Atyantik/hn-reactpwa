import { getStories, requestNewStories } from '../api';
import ArticleListSkeleton from '../components/articles/list-skeleton';

export default [
  {
    component: () => import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo }: any) => {
      const topStories = await requestNewStories();
      updateSeo({
        title: 'New stories - Page 1 - Hacker news - HN ReactPWA',
      });
      return {
        allStoriesIds: topStories,
        currentPage: 1,
        stories: await getStories(topStories, 0, 30),
        urlPrefix: '/new-stories-hacker-news/',
      };
    },
    path: '/new-stories-hacker-news',
    skeleton: ArticleListSkeleton,
  },
  {
    component: () => import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo, match }: any) => {
      const page = parseInt(match.params.page, 10);
      const topStories = await requestNewStories();
      updateSeo({
        title: `New stories - Page ${page} - Hacker news - HN ReactPWA`,
      });
      return {
        allStoriesIds: topStories,
        currentPage: page,
        stories: await getStories(topStories, (page - 1) * 30, 30),
        urlPrefix: '/new-stories-hacker-news/',
      };
    },
    path: '/new-stories-hacker-news/page/:page',
    skeleton: ArticleListSkeleton,
  },
];
