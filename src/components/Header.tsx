import './header.css';
const Header = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => (
    <header className="header">
        <a className="wordmark" href="#main" aria-label="Siân home">Siân<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span><span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
    </header>
);
export default Header;
