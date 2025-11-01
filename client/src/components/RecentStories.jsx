function RecentStories() {
  const stories = [
    {
      title: 'The Quest for the Crystal Key',
      genre: 'Adventure & Exploration',
      color: 'yellow',
    },
    {
      title: 'The Guardians of the Green Forest',
      genre: 'Environment & Nature Care',
      color: 'green',
    },
    {
      title: 'Mystery at the Midnight Mansion',
      genre: 'Mystery / Problem-Solving',
      color: 'cyan',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">Recent Stories</h2>
      <div className="flex flex-col gap-4 p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm">
        {stories.map((story) => (
          <div key={story.title} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div>
              <p className="font-bold text-text-light dark:text-text-dark">{story.title}</p>
              <p className={`text-sm font-medium text-${story.color}-600 dark:text-${story.color}-400`}>{story.genre}</p>
            </div>
            <button className="flex w-full md:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Read Again</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentStories;

