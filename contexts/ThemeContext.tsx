import { createContext, Dispatch, SetStateAction} from "react";

interface ThemeProps {
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
}
const ThemeContext = createContext<ThemeProps | undefined>(undefined);
export default ThemeContext