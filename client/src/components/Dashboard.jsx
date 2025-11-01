import Header from './Header';
import ProfileCard from './ProfileCard';
import StoryStatistics from './StoryStatistics';
import Certificates from './Certificates';
import RecentStories from './RecentStories';
import MotivationalBanner from './MotivationalBanner';

function Dashboard() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <main className="px-4 sm:px-6 lg:px-10 py-8">
          <div className="layout-content-container flex flex-col mx-auto max-w-7xl">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 p-4 mb-6">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, Alex!</p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">Ready to create a new adventure?</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-1 flex flex-col gap-8">
                <ProfileCard />
                <StoryStatistics />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                <Certificates />
                <RecentStories />
              </div>
            </div>

            <MotivationalBanner />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

