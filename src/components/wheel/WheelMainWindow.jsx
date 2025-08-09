import WheelMainContainer from './WheelMainContainer';
import WheelSideContainer from './WheelSideContainer';
import ResultContainer from '../ResultContainer';

import { useEffect, useMemo, useRef, useState } from 'react';
import { WHEEL_KOAF_VALUES, WHEEL_HISTORY_ARRAY_LIMIT, WHEEL_LAST_GAMES_ARRAY_LIMIT } from '../../data';

export default function WheelMainWindow({
    balance,
    setBalance,

    spinInfo,
    setSpinInfo,

    isDisabled,
    setIsDisabled,

    historyArray,
    setHistoryArray,

    setLastGamesArray,

    setStatistics,
    setOverallStatistics
}) {
    const [wheelAngle, setWheelAngle] = useState(0);
    const wheelDirection = useRef(0);
    const wheelSpeed = useRef(0);

    const [wheelEndGame, setWheelEndGame] = useState(false);
    useEffect(() => {
        if (wheelEndGame) {
            FinishWheelSpin();
            setWheelEndGame(false);
        }
    }, [wheelEndGame]);

    function StartWheelSpin() {
        wheelDirection.current = Math.random() < 0.5 ? 1 : -1; // Right or left
        wheelSpeed.current = 4 + Math.random() * 6; // From 4 to 10

        setIsDisabled(true);
        setBalance((value) => value - spinInfo.bet);
        UpdateWheelStatistics('start');

        WheelSpin();
    }

    function WheelSpin() {
        setWheelAngle((prev) => (prev + wheelSpeed.current * wheelDirection.current) % 360);

        if (wheelSpeed.current > 3) {
            wheelSpeed.current -= Math.random() * 0.025;
        } else if (wheelSpeed.current > 2) {
            wheelSpeed.current -= Math.random() * 0.02;
        } else if (wheelSpeed.current > 1) {
            wheelSpeed.current -= Math.random() * 0.015;
        } else if (wheelSpeed.current > 0.5) {
            wheelSpeed.current -= Math.random() * 0.01;
        } else {
            wheelSpeed.current -= Math.random() * 0.004;
        }

        if (wheelSpeed.current <= 0) {
            setWheelAngle((prev) => (prev >= 0 ? prev : prev + 360));
            wheelSpeed.current = 0;
            wheelDirection.current = 0;
            setWheelEndGame(true);
        } else {
            setTimeout(WheelSpin, 10);
        }
    }

    function FinishWheelSpin() {
        console.log(`Final angle is ${wheelAngle}`);

        const finalColor = GetFinalColor();
        const isWin = spinInfo.color == finalColor;
        const bgColor = isWin ? '5C9E5E' : '9E5C5C';
        const profit = isWin ? spinInfo.bet * (WHEEL_KOAF_VALUES[spinInfo.color] - 1) : spinInfo.bet;

        if (isWin) {
            setBalance((prev) => prev + profit + spinInfo.bet);
        }

        ShowGameResult(bgColor, finalColor, isWin, profit);
        UpdateHistoryAndLastGames(
            bgColor,
            spinInfo.color,
            finalColor,
            spinInfo.bet,
            isWin ? spinInfo.bet * WHEEL_KOAF_VALUES[spinInfo.color] : 0
        );
        UpdateWheelStatistics('finish', isWin, finalColor, spinInfo.bet * WHEEL_KOAF_VALUES[spinInfo.color]);

        setIsDisabled(false);
    }

    function GetFinalColor() {
        let nearestDegree;
        let distance = Infinity;

        for (let i = 0; i <= 360; i += 9) {
            const newDistance = Math.abs(wheelAngle - i);
            if (newDistance < distance) {
                distance = newDistance;
                nearestDegree = i % 360;
            }
        }

        nearestDegree -= 225;
        if (nearestDegree < 0) {
            nearestDegree += 360;
        }
        console.log(`Nearest degree is ${nearestDegree}`);

        let wheelColor;

        const GREEN = 0;
        const YELLOW = [45, 180, 225];
        const BLACK = [9, 27, 63, 81, 99, 117, 135, 153, 171, 189, 207, 243, 261, 279, 297, 315, 333, 351];
        const RED = [18, 36, 54, 72, 90, 108, 126, 144, 162, 198, 216, 234, 252, 270, 288, 306, 324, 342];

        if (nearestDegree == GREEN) {
            wheelColor = 'Green';
        } else if (YELLOW.includes(nearestDegree)) {
            wheelColor = 'Yellow';
        } else if (BLACK.includes(nearestDegree)) {
            wheelColor = 'Black';
        } else if (RED.includes(nearestDegree)) {
            wheelColor = 'Red';
        }

        console.log(`Final color is ${wheelColor}`);

        return wheelColor;
    }

    function ShowGameResult(bgColor, finalColor, isWin, profit) {
        const resultContainer = document.getElementById('resultContainer');
        const resultColor = document.getElementById('resultColor');
        const resultProfit = document.getElementById('resultProfit');

        resultContainer.style.display = 'flex';
        resultContainer.style.background = `radial-gradient(#${bgColor} 5%, #${bgColor}77)`;
        resultColor.textContent = `${finalColor} x${WHEEL_KOAF_VALUES[finalColor]}`;
        resultProfit.textContent = isWin ? `+ ${profit} $` : `- ${profit} $`;

        setTimeout(() => (resultContainer.style.display = 'none'), 5000);
    }

    function UpdateHistoryAndLastGames(bgColor, userColor, finalColor, betBefore, betAfter) {
        setHistoryArray((prev) => {
            const current = [finalColor, ...prev];
            current.length > WHEEL_HISTORY_ARRAY_LIMIT && current.pop();
            return current;
        });
        setLastGamesArray((prev) => {
            const current = [{ bgColor, userColor, finalColor, betBefore, betAfter }, ...prev];
            current.length > WHEEL_LAST_GAMES_ARRAY_LIMIT && current.pop();
            return current;
        });
    }

    function UpdateWheelStatistics(key, isWin, finalColor, moneyWon) {
        if (key == 'start') {
            setStatistics(stats => {
                let newStats = [...stats];

                newStats[0] += 1; // totalSpins
                newStats[2] += spinInfo.bet; // totalMoneyBet
                if (spinInfo.color == 'Red') newStats[6] += 1; // redChoosed
                if (spinInfo.color == 'Black') newStats[8] += 1; // blackChoosed
                if (spinInfo.color == 'Yellow') newStats[10] += 1; // yellowChoosed
                if (spinInfo.color == 'Green') newStats[12] += 1; // greenChoosed
                return newStats;
            });
            setOverallStatistics(stats => {
                let newStats = [...stats];

                newStats[2] += spinInfo.bet; // moneyBet
                newStats[4] = Math.round((stats[2] + spinInfo.bet) / (stats[6] + 1) * 100) / 100; // averageBet
                newStats[6] += 1; // games
                if (stats[10] + 1 >= stats[11]) newStats[7] = 'Wheel'; // favoriteGame
                newStats[10] += 1; // wheelGames
                return newStats;
            });
        } else if (key == 'finish') {
            setStatistics(stats => {
                let newStats = [...stats];

                if (isWin) newStats[1] += 1; // totalWins
                if (isWin) newStats[3] += moneyWon; // totalMoneyWon
                newStats[4] = Math.round((stats[1] + (isWin ? 1 : 0)) / stats[0] * 1000) / 10; // winPercentage
                newStats[5] = stats[3] + (isWin ? moneyWon : 0) - stats[2]; // moneyProfit
                if (isWin && finalColor == 'Red') newStats[7] += 1; // redWon
                if (isWin && finalColor == 'Black') newStats[9] += 1; // blackWon
                if (isWin && finalColor == 'Yellow') newStats[11] += 1; // yellowWon
                if (isWin && finalColor == 'Green') newStats[13] += 1; // greenWon
                return newStats;
            });
            setOverallStatistics(stats => {
                let newStats = [...stats];

                if (isWin) newStats[3] += moneyWon; // moneyWon
                newStats[5] = Math.round((stats[3] + (isWin ? moneyWon : 0)) / stats[6] * 100) / 100; // averageWin
                if (isWin) newStats[8] += 1; // wins
                newStats[9] = Math.round((stats[8] + (isWin ? 1 : 0)) / stats[6] * 1000) / 10; // winPercentage
                return newStats;
            });
        }
    }

    const MemoizedWheelSideContainer = useMemo(() => (
        <WheelSideContainer
            balance={balance}
            spinInfo={spinInfo}
            setSpinInfo={setSpinInfo}
            isDisabled={isDisabled}
            StartEvent={StartWheelSpin}
            historyArray={historyArray}
        />
    ), [balance, spinInfo, isDisabled, historyArray]);

    return (
        <div className='mainGameWindow' style={{ background: 'linear-gradient(to right, #4C9AFF, #9137BB)' }}>
            <WheelMainContainer wheelAngle={wheelAngle} />
            {MemoizedWheelSideContainer}
            <ResultContainer />
        </div>
    );
}
