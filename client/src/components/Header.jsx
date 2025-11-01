function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 dark:border-b-gray-800 px-4 sm:px-6 lg:px-10 py-4 sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="size-8 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">AI Story Generator</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyqFLoIjyRzr3NX0wch9WjvlXNemXhh0w57x_zZMyR8IZfaWGmX4q9OmtOih75U7NVswYvk_DIfUGtT_toizJ-xc2enNuM5XBPo-A8K51oLr7QQKzm3QcAK0hxjR37Ko0AdrBzYwQWP_aTEbNZngK2XMPJFL6WKEdeBYI8bfu5LAYeuXC0JpcyKXOnoMJyNLs--T6gqbzyRhqoh_UXC34GJvdADOHsB5WaC_DEb8K7CllQrEXHEKzvXbq6-z_MHzO1q7xETQN5dUCO")'}}
          data-alt="User avatar of a cartoon astronaut"
        ></div>
      </div>
    </header>
  );
}

export default Header;

