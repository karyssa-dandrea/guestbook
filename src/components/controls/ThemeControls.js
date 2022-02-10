import { useTheme } from '../../context/ThemeContext';

export default function ThemeControls() {
  const { theme, setTheme } = useTheme('');

  const handleTheme = () => {
    const selectedTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(selectedTheme);
  };
  return (
    <div className="theme-button" data-theme={theme}>
      <button onClick={handleTheme}>{theme === 'light' ? 'Dark' : 'Light'} mode</button>
    </div>
  );
}
