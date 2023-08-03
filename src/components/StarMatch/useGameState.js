import { useEffect, useState } from "react";
import utils from "./utils";

const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
    const [candidateNumbers, setCandidateNumbers] = useState([]);
    const [secondsLeft, setSecondLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0 && availableNumbers.length > 0) {
            const timerId = setTimeout(() => {
                setSecondLeft(secondsLeft - 1);
            }, 1000);

            return () => clearTimeout(timerId);
        }
    })

    const setGameState = (newCandidates) => {
        if (utils.sum(newCandidates) !== stars) {
            setCandidateNumbers(newCandidates);

        } else {
            const newAvailableNums = availableNumbers.filter(
                x => !newCandidates.includes(x)
            );

            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNumbers(newAvailableNums);
            setCandidateNumbers([]);
        }
    }

    return { stars, availableNumbers, candidateNumbers, secondsLeft, setGameState };

}

export default useGameState;