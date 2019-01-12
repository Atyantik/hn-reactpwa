import fetch from 'cross-fetch';

const endpoint = 'https://hacker-news.firebaseio.com/v0/';

export const request = async (url: string) => {
  if (url.startsWith('/')) {
    url = url.substr(1);
  }
  return await fetch(`${endpoint}${url}`).then(res => res.json());
};

const topstories = [];
export const requestTopstories = async () => {
  if (topstories && topstories.length) {
    return topstories;
  }
  return await fetch(`${endpoint}topstories.json`).then(res => res.json());
};

export const getStories = async (storyIds: number[], offset: number = 460, limit: number = 10) => {
  const itemIds = storyIds.slice(offset, offset+limit);
  if (!itemIds.length) {
    return [];
  }
  let promises = itemIds.map(id => request(`item/${id}.json`));
  return await (Promise.all(promises));
};