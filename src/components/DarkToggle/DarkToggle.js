import React, { useContext } from 'react';
import Toggle from 'react-bootstrap-toggle';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonS } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonR } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../contexts/ThemeContext';

const DarkToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const isDark = theme === 'dark';
    const icon = isDark ? faMoonS : faMoonR;

    const onToggle = () => {
        const th = isDark ? 'light' : 'dark';
        setTheme(th);
    }

    return (
        <form>
            <Toggle
                onClick={onToggle}
                onClassName={'ios'}
                on={<IconComponent icon={icon} />}
                off={<IconComponent icon={icon} />}
                size="sm"
                onstyle="info"
                offstyle="success"
                active={isDark}
            />
        </form>
    );
}

const IconComponent = React.memo(({ icon }) => {
    return <FontAwesomeIcon icon={icon} size='xl' />
})

export default DarkToggle;
