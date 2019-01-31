import { getItemDetails } from '../api';
import ItemSkeleton from '../components/story/item-skeleton';

export default [
  {
    component: import('../components/story/item'),
    exact: true,
    loadData: async ({ match, updateSeo }: any) => {
      const { params: { itemId } } = match;
      const itemDetails = await getItemDetails(itemId);
      updateSeo({
        description: itemDetails.title,
        title: `${itemDetails.title} - HN ReactPWA`,
      });
      return itemDetails;
    },
    path: '/story/:itemId',
    skeleton: ItemSkeleton,
  },
];
