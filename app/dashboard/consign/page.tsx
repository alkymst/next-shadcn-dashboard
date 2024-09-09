import { Breadcrumbs } from '@/components/breadcrumbs';
import { CreateProfileOne } from '@/components/forms/user-profile-stepper/create-profile';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Consignment', link: '/dashboard/consign' }
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <h1>Consignment</h1>
        <p>
          Hi, I'm Frank Mecum, Vice President of Consignments at Mecum Auctions.
          I want to thank you for your interest in consigning with us.
        </p>
        <p>
          This form will walk you through the necessary information we need to
          get started on your consignment and should only take a couple of
          minutes.
        </p>
      </div>
    </PageContainer>
  );
}
