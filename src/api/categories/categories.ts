import type { iCategoryReqData } from './categoryTypes';

export const getCategories = (url: string): Promise<iCategoryReqData> => {
  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (res.ok) return res.json();
      else throw new Error('Failed to fetch categories data');
    })
    .catch(err => {
      console.error(err);
    });
};
