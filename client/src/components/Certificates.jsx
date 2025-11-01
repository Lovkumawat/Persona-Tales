function Certificates() {
  const certificates = [
    {
      title: 'Adventure Explorer',
      description: 'For creating 10+ Adventure & Exploration stories.',
    },
    {
      title: 'Master Storyteller',
      description: 'For creating stories in all 10 different genres.',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">Certificates Earned</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm">
        {certificates.map((cert) => (
          <div key={cert.title} className="flex flex-col gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-text-light dark:text-text-dark">{cert.title}</p>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{cert.description}</p>
              </div>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-text-light dark:text-text-dark dark:bg-primary/30 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
              <span className="truncate">View Certificate</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;

