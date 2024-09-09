import { Breadcrumbs } from '@/components/breadcrumbs';
import { CreateProfileOne } from '@/components/forms/user-profile-stepper/create-profile';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Register to Bid', link: '/dashboard/register-to-bid' }
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <h1>Register to Bid</h1>
        <p>
          Mecum has been specializing in the auctioning of antique autos,
          collector cars, special-interest vehicles and more since 1988. Sign up
          to bid with confidence on any of the more than 20,000 auction items
          offered annually through the Mecum platform, and enjoy the freedom and
          flexibility of choosing your preferred method of bidding.
        </p>
      </div>
    </PageContainer>
  );
}
