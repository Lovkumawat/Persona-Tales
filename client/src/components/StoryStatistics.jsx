function StoryStatistics() {
  const genres = [
    { name: 'Adventure & Exploration', count: 12, icon: 'explore', color: 'yellow' },
    { name: 'Environment & Nature Care', count: 8, icon: 'nature', color: 'green' },
    { name: 'Mythology', count: 10, icon: 'auto_stories', color: 'purple' },
    { name: 'Gratitude & Humility', count: 6, icon: 'favorite', color: 'pink' },
    { name: 'Hard Work & Perseverance', count: 9, icon: 'fitness_center', color: 'orange' },
    { name: 'Honesty & Truthfulness', count: 7, icon: 'verified', color: 'blue' },
    { name: 'Humor / Funny', count: 11, icon: 'sentiment_satisfied', color: 'amber' },
    { name: 'Mystery / Problem-Solving', count: 8, icon: 'psychology', color: 'cyan' },
    { name: 'Respect for Parents / Elders', count: 5, icon: 'family_restroom', color: 'indigo' },
    { name: 'Science Fiction', count: 10, icon: 'rocket_launch', color: 'violet' },
  ];

  const totalStories = genres.reduce((sum, genre) => sum + genre.count, 0);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">Story Statistics</h2>
      <div className="flex flex-col gap-4 p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm">
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-background-light dark:bg-background-dark">
          <p className="text-text-muted-light dark:text-text-muted-dark text-base font-medium leading-normal">Total Stories Generated</p>
          <p className="text-primary tracking-light text-5xl font-bold leading-tight">{totalStories}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {genres.map((genre) => (
            <div key={genre.name} className={`flex items-center gap-3 p-4 rounded-lg bg-${genre.color}-500/10 dark:bg-${genre.color}-500/20`}>
              <div className={`flex items-center justify-center size-10 rounded-full bg-${genre.color}-500/20 text-${genre.color}-600 dark:text-${genre.color}-400`}>
                <span className="material-symbols-outlined">{genre.icon}</span>
              </div>
              <div className="flex flex-col">
                <p className={`font-bold text-sm text-${genre.color}-800 dark:text-${genre.color}-300`}>{genre.name}</p>
                <p className={`text-xs text-${genre.color}-600 dark:text-${genre.color}-400`}>{genre.count} stories</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryStatistics;

