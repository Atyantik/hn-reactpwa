import React from 'react';

export default [
  {
    path: '/show',
    exact: true,
    component: () => <div>Hello World.</div>,
    loadData: async () => {
      console.log("load me");
    }
  }
];