import { useContext } from 'react';
import LatestGamesChart from './LatestGameChart';
import './style.css';
import { ThemeContext } from '../../contexts/ThemeContext';

const latestGames = [
    { id: 1, win: true },
    { id: 2, win: false },
    { id: 3, win: true },
    { id: 4, win: true },
    { id: 5, win: false },
    { id: 6, win: true },
    { id: 7, win: true },
    { id: 8, win: true },
];

const LatestGamesCard = () => {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';

    let cardClasses = 'card latest-games-card';
    if (isDark)
        cardClasses += ' text-white bg-dark';

    return <div className={cardClasses}>
        <div className="card-body">
            <h5 className="card-title">Lates Games</h5>
            <p className="card-text">Summary of the latest games played</p>
            <div className='row'>
                <LatestGamesChart />
            </div>
            <div className="d-flex py-4">
                {latestGames.map(g =>
                    <div key={g.id} className={g.win
                        ? 'game-result success'
                        : 'game-result error'}>
                        {g.win ? 'W' : 'F'}
                    </div>)}
            </div>
            <a href="#/" className="btn btn-primary">View Report</a>
        </div>
    </div>
}

export default LatestGamesCard;