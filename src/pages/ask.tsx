import { getStories, requestAskHNStories } from '../api';
import ArticleListSkeleton from '../components/articles/list-skeleton';

export default [
  {
    component: import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo }: any) => {
      const topStories = await requestAskHNStories();
      updateSeo({
        title: 'AskHN - Page 1 - Ask hacker News - HN ReactPWA',
      });
      return {
        allStoriesIds: topStories,
        currentPage: 1,
        stories: await getStories(topStories, 0, 30),
        urlPrefix: '/ask-hn-hacker-news/',
      };
    },
    path: '/ask-hn-hacker-news',
    skeleton: ArticleListSkeleton,
  },
  {
    component: import('../components/articles'),
    exact: true,
    loadData: async ({ updateSeo, match }: any) => {
      const page = parseInt(match.params.page, 10);
      const topStories = await requestAskHNStories();
      updateSeo({
        title: `AskHN - Page ${page} - Ask hacker news - HN ReactPWA`,
      });
      return {
        allStoriesIds: topStories,
        currentPage: page,
        stories: await getStories(topStories, (page - 1) * 30, 30),
        urlPrefix: '/ask-hn-hacker-news/',
      };
    },
    path: '/ask-hn-hacker-news/page/:page',
    skeleton: ArticleListSkeleton,
  },
];
