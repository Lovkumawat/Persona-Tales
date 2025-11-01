function ProfileCard() {
  return (
    <div className="flex flex-col p-6 @container bg-card-light dark:bg-card-dark rounded-xl shadow-sm">
      <div className="flex w-full flex-col gap-6 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
        <div className="flex flex-col items-center @[520px]:flex-row gap-6">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAq9q__ONYql7TsyIcM7L1OdCUbD7zmGeTQ0-JEbyJDOs7YwCCRKmOJNQAGKAM9EbY3vWYMWCZp8bIIj6mJbDtvwAtdSdT8RRdcl9q-dPGmQAO9Lb4_VB1FPH0UG-HYvjpunJX_M2r6vyNA9SCG3feTJlB2_4-ET08MX1q8Ez4i-FyeprcMDIUj7VY6lVeU-Yv2eXE8AuJCRbeZe7JfIljYf5vWN5LNcv5TeTkr7D-r3L6hhrg4eAeqXy3rTI3ML6wrGDpU0wE1kEIN")'}}
            data-alt="User avatar of a cartoon astronaut"
          ></div>
          <div className="flex flex-col justify-center text-center @[520px]:text-left">
            <p className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em]">Alex Johnson</p>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">alex.johnson@email.com</p>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">+1 123-456-7890</p>
          </div>
        </div>
      </div>
      <button className="mt-6 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
        <span className="truncate">Edit Profile</span>
      </button>
    </div>
  );
}

export default ProfileCard;

