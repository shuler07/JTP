import WheelMainContainer from './WheelMainContainer';
import WheelSideContainer from './WheelSideContainer';
import ResultContainer from '../ResultContainer';

import { useEffect, useRef, useState } from 'react';
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
}) {
    const [wheelAngle, setWheelAngle] = useState(0);
    const [wheelEndGame, setWheelEndGame] = useState(false);
    const wheelDirection = useRef(0);
    const wheelSpeed = useRef(0);

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
            setStatistics((stats) => ({
                ...stats,
                totalSpins: stats.totalSpins + 1,
                totalMoneyBet: stats.totalMoneyBet + spinInfo.bet,
                redChoosed: stats.redChoosed + (spinInfo.color == 'Red' ? 1 : 0),
                blackChoosed: stats.blackChoosed + (spinInfo.color == 'Black' ? 1 : 0),
                yellowChoosed: stats.yellowChoosed + (spinInfo.color == 'Yellow' ? 1 : 0),
                greenChoosed: stats.greenChoosed + (spinInfo.color == 'Green' ? 1 : 0),
            }));
        } else if (key == 'finish') {
            setStatistics((stats) => ({
                ...stats,
                totalWins: stats.totalWins + (isWin ? 1 : 0),
                totalMoneyWon: stats.totalMoneyWon + (isWin ? moneyWon : 0),
                winPercentage: Math.round(((stats.totalWins + (isWin ? 1 : 0)) / stats.totalSpins) * 1000) / 10,
                moneyProfit: stats.totalMoneyWon + (isWin ? moneyWon : 0) - stats.totalMoneyBet,
                redWon: stats.redWon + (isWin && finalColor == 'Red' ? 1 : 0),
                blackWon: stats.blackWon + (isWin && finalColor == 'Black' ? 1 : 0),
                yellowWon: stats.yellowWon + (isWin && finalColor == 'Yellow' ? 1 : 0),
                greenWon: stats.greenWon + (isWin && finalColor == 'Green' ? 1 : 0),
            }));
        }
    }

    return (
        <div className='mainGameWindow' style={{ background: 'linear-gradient(to right, #4C9AFF, #9137BB)' }}>
            <WheelMainContainer wheelAngle={wheelAngle} />
            <WheelSideContainer
                balance={balance}
                spinInfo={spinInfo}
                setSpinInfo={setSpinInfo}
                isDisabled={isDisabled}
                StartEvent={StartWheelSpin}
                historyArray={historyArray}
            />
            <ResultContainer />
        </div>
    );
}