
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

type ThemeProps = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};  

export default function Toggle(
  { isDark, setIsDark }: ThemeProps
) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    

    useEffect(() => setMounted(true), []);

    if (!mounted) {
      return null;
    }

    const newTheme = () => {
      if (theme === "light") {
        setTheme("dark");
        setIsDark(true);
      } else {
        setTheme("light");
        setIsDark(false);
      }
    };

    
  
    return (
      <div className="bg-background text-primary-green">
        The current theme is: {theme}
        <br />
        <button>
          {isDark ? <FaMoon onClick={newTheme} /> : <FaRegMoon onClick={newTheme} />}
        </button>
      </div>
    );
    
}