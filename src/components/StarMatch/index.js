import { useContext, useState } from 'react';
import './style.css';
import utils from './utils';
import useGameState from './useGameState';
import PlayAgain from './PlayAgain';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';
import { ThemeContext } from '../../contexts/ThemeContext';
import Pagetitle from '../PageTitle';


const Game = (props) => {
    const {
        stars,
        availableNumbers,
        candidateNumbers,
        secondsLeft,
        setGameState,
    } = useGameState();
    const { theme } = useContext(ThemeContext);

    const isDark = theme === 'dark';
    const candidatesAreWrong = utils.sum(candidateNumbers) > stars;

    const gameStatus = availableNumbers.length === 0
        ? 'won'
        : secondsLeft === 0 ? 'lost' : 'active';

    const numberStatus = (number) => {
        if (!availableNumbers.includes(number)) {
            return 'used';
        }

        if (candidateNumbers.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }

        return 'available'
    }

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus === 'used' || gameStatus !== 'active')
            return;


        const newCandidates = currentStatus === 'available'
            ? [...candidateNumbers, number]
            : candidateNumbers.filter(cn => cn !== number);

        setGameState(newCandidates);
    }

    return (
        <div className={isDark ? 'game bg-dark text-white' : 'game'}>
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {gameStatus !== 'active' ?
                        <PlayAgain handleOnClick={props.starNewGame} gameStatus={gameStatus} /> :
                        <StarsDisplay count={stars} />
                    }
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number =>
                        <PlayNumber
                            key={number}
                            number={number}
                            status={numberStatus(number)}
                            isCandidate={candidateNumbers}
                            handleOnClick={onNumberClick}
                        />
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
};

const StarMatch = () => {
    const [gameId, setGameId] = useState(1);

    return <div className='container'>
        <div className="row">
            <Pagetitle title={'Star Game'} />
        </div>
        <Game key={gameId} starNewGame={() => setGameId(gameId + 1)} />
    </div>
}




export default StarMatch;