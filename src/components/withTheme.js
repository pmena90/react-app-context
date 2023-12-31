import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// Define a higher-order function named "withTheme"
// Example used to provide theme hook state to a class component.
function withTheme(Component) {
    return function (props) {
        const { theme, setTheme } = useContext(ThemeContext);
        return (
            <Component {...props} theme={theme} setTheme={setTheme} />
        );
    };
}

export default withTheme;