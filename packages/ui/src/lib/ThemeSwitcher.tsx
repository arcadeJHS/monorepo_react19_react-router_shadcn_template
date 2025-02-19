import { useTheme } from './ThemeProvider.tsx';
import { Button } from "@/components/ui/button"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleSwitch = () => {
    setTheme(theme === 'theme-default' ? 'theme-pink' : 'theme-default');
  };

  return (
    <Button className='btn cursor-pointer' onClick={handleSwitch}>Switch Theme (current: {theme})</Button>
  );
};

export default ThemeSwitcher;