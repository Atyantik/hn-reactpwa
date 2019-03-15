import { getStories, requestShowHNStories } from '../api';
import ArticleListSkeleton from '../components/articles/list-skeleton';

export default [
  {
    component: () => import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo }: any) => {
      const topStories = await requestShowHNStories();
      updateSeo({
        title: 'ShowHN - Page 1 - Show hacker news - HN ReactPWA',
      });
      return {
        allStoriesIds: topStories,
        currentPage: 1,
        stories: await getStories(topStories, 0, 30),
        urlPrefix: '/show-hn-hacker-news/',
      };
    },
    path: '/show-hn-hacker-news',
    skeleton: ArticleListSkeleton,
  },
  {
    component: () => import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo, match }: any) => {
      const page = parseInt(match.params.page, 10);
      const topStories = await requestShowHNStories();
      updateSeo({
        title: `ShowHN - Page ${page} - Show hacker news - HN ReactPWA`,
      });
      return {
        allStoriesIds: topStories,
        currentPage: page,
        stories: await getStories(topStories, (page - 1) * 30, 30),
        urlPrefix: '/show-hn-hacker-news/',
      };
    },
    path: '/show-hn-hacker-news/page/:page',
    skeleton: ArticleListSkeleton,
  },
];
