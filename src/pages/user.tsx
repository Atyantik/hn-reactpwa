import { getUserDetails } from '../api';
import ProfileSkeleton from '../components/user/profile-skeleton';

export default [
  {
    component: () => import('../components/user/profile'),
    exact: true,
    loadData: async ({ match, updateSeo }: any) => {
      const { params: { userId } } = match;
      const userDetails = await getUserDetails(userId);
      updateSeo({
        description: userDetails.about || userDetails.id,
        title: `${userDetails.id} - user - HN ReactPWA`,
      });
      return userDetails;
    },
    path: '/user/:userId',
    skeleton: ProfileSkeleton,
  },
];
