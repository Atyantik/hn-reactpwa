import fetch from 'cross-fetch';

const endpoint = 'https://hacker-news.firebaseio.com/v0/';

export const request = async (url: string) => {
  let apiUrl = url;
  if (url.startsWith('/')) {
    apiUrl = url.substr(1);
  }
  return fetch(`${endpoint}${apiUrl}`).then(res => res.json());
};

const topStories: number[] = [];
export const requestTopStories = async () => {
  if (topStories && topStories.length) {
    return topStories;
  }
  return fetch(`${endpoint}topstories.json`).then(res => res.json());
};

const newStories: number[] = [];
export const requestNewStories = async () => {
  if (newStories && newStories.length) {
    return newStories;
  }
  return fetch(`${endpoint}newstories.json`).then(res => res.json());
};

const showHNStories: number[] = [];
export const requestShowHNStories = async () => {
  if (showHNStories && showHNStories.length) {
    return showHNStories;
  }
  return fetch(`${endpoint}showstories.json`).then(res => res.json());
};

const askHNStories: number[] = [];
export const requestAskHNStories = async () => {
  if (askHNStories && askHNStories.length) {
    return askHNStories;
  }
  return fetch(`${endpoint}askstories.json`).then(res => res.json());
};

const jobStories: number[] = [];
export const requestJobStories = async () => {
  if (jobStories && jobStories.length) {
    return jobStories;
  }
  return fetch(`${endpoint}jobstories.json`).then(res => res.json());
};

export const getStories = async (storyIds: number[], offset: number = 460, limit: number = 10) => {
  const itemIds = storyIds.slice(offset, offset + limit);
  if (!itemIds.length) {
    return [];
  }
  const promises = itemIds.map(id => request(`item/${id}.json`));
  return Promise.all(promises);
};
