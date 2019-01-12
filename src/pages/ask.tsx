import React from 'react';

export default [
  {
    path: '/ask',
    exact: true,
    component: () => <div>Hello World.</div>,
    loadData: async () => {
      console.log("load me");
    }
  }
];