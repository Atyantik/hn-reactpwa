import { request, requestTopstories, getStories } from '../api';

export default [
  {
    path: '/',
    exact: true,
    component: import('../components/articles'),
    loadData: async ({ updateSeo }) => {
      const topStories = await requestTopstories();
      updateSeo({
        title: 'Top stories - Page 1 - Hacker news - ReactPWA HN',
      });
      return {
        stories: await getStories(topStories, 0, 10),
        allStoriesIds: topStories,
        currentPage: 1,
        urlPrefix: '/',
      };
    },
  },
  {
    path: '/page/:page',
    exact: true,
    component: import('../components/articles'),
    loadData: async ({ updateSeo, match }) => {
      const page = parseInt(match.params.page);
      const topStories = await requestTopstories();
      updateSeo({
        title: `Top stories - Page ${page} - Hacker news - ReactPWA HN`
      });
      return {
        stories: await getStories(topStories, (page - 1) * 10, 10),
        allStoriesIds: topStories,
        currentPage: page,
        urlPrefix: '/'
      }
    }
  },
];
