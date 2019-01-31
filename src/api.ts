import fetch from 'cross-fetch';
import apiCache from 'memory-cache';

const endpoint = 'https://hacker-news.firebaseio.com/v0/';
const apiCacheEnabled = typeof window === 'undefined' && typeof window === 'undefined';
export const request = async (url: string) => {
  let apiUrl = url;
  if (url.startsWith('/')) {
    apiUrl = url.substr(1);
  }
  const finalUrl = `${endpoint}${apiUrl}`;
  let response = null;
  if (apiCacheEnabled) {
    response = apiCache.get(finalUrl);
  }
  if (!response) {
    response = await fetch(finalUrl).then(res => res.json());
    apiCache.put(finalUrl, response, 3600000);
  }

  return response;
};

const topStories: number[] = [];
export const requestTopStories = async () => {
  if (topStories && topStories.length) {
    return topStories;
  }
  return request('topstories.json');
};

const newStories: number[] = [];
export const requestNewStories = async () => {
  if (newStories && newStories.length) {
    return newStories;
  }
  return request('newstories.json');
};

const showHNStories: number[] = [];
export const requestShowHNStories = async () => {
  if (showHNStories && showHNStories.length) {
    return showHNStories;
  }
  return request('showstories.json');
};

const askHNStories: number[] = [];
export const requestAskHNStories = async () => {
  if (askHNStories && askHNStories.length) {
    return askHNStories;
  }
  return request('askstories.json');
};

const jobStories: number[] = [];
export const requestJobStories = async () => {
  if (jobStories && jobStories.length) {
    return jobStories;
  }
  return request('jobstories.json');
};

export const getStories = async (storyIds: number[], offset: number = 460, limit: number = 10) => {
  const itemIds = storyIds.slice(offset, offset + limit);
  if (!itemIds.length) {
    return [];
  }
  const promises = itemIds.map(id => request(`item/${id}.json`));
  return Promise.all(promises);
};

export const getUserDetails = async (userId: string) => {
  return request(`user/${userId}.json`);
};

export const getItemDetails = async (itemId: string) => {
  return request(`item/${itemId}.json`);
};
