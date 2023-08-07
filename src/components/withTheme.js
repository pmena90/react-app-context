import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function withTheme(Component) {
    return function (props) {
        const { theme, setTheme } = useContext(ThemeContext);
        return (
            <Component {...props}
                theme={theme}
                setTheme={setTheme}
            ></Component>
        );
    };
}

export default withTheme;