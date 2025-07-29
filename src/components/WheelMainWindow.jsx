import { KOAF_BY_COLOR_VALUES, WHEEL_HISTORY_ARRAY_LIMIT, WHEEL_LAST_GAMES_ARRAY, WHEEL_LAST_GAMES_ARRAY_LIMIT } from '../data';
import './WheelMainWindow.css';
import { useEffect, useRef, useState } from 'react';

export default function WheelMainWindow({
    balance,
    setBalance,
    spinInfo,
    isDisabled,
    setIsDisabled,
    setWheelHistoryArray,
    setWheelLastGamesArray,
    setWheelStatistics,
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
        const profit = isWin
            ? spinInfo.bet * (KOAF_BY_COLOR_VALUES[spinInfo.color] - 1)
            : spinInfo.bet;

        if (isWin) {
            setBalance((prev) => prev + profit + spinInfo.bet);
        }

        ShowGameResult(bgColor, finalColor, isWin, profit);
        UpdateHistoryAndLastGames(
            bgColor,
            spinInfo.color,
            finalColor,
            spinInfo.bet,
            isWin ? spinInfo.bet * KOAF_BY_COLOR_VALUES[spinInfo.color] : 0
        );
        UpdateWheelStatistics(
            'finish',
            isWin,
            finalColor,
            spinInfo.bet * KOAF_BY_COLOR_VALUES[spinInfo.color]
        );

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

        nearestDegree -= 180;
        if (nearestDegree < 0) {
            nearestDegree += 360;
        }
        console.log(`Nearest degree is ${nearestDegree}`);

        let wheelColor;

        const GREEN = 0;
        const YELLOW = [45, 180, 225];
        const BLACK = [
            9, 27, 63, 81, 99, 117, 135, 153, 171, 189, 207, 243, 261, 279, 297, 315, 333, 351,
        ];
        const RED = [
            18, 36, 54, 72, 90, 108, 126, 144, 162, 198, 216, 234, 252, 270, 288, 306, 324, 342,
        ];

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
        const resultWindow = document.getElementById('wheelMainWindowResult');
        const resultColor = document.getElementById('wheelMainWindowResultColor');
        const resultProfit = document.getElementById('wheelMainWindowResultProfit');

        resultWindow.style.display = 'flex';
        resultWindow.style.background = `linear-gradient(#${bgColor} 5%, #${bgColor}77)`;
        resultColor.textContent = `${finalColor} x${KOAF_BY_COLOR_VALUES[finalColor]}`;
        resultProfit.textContent = isWin ? `+ ${profit} $` : `- ${profit} $`;

        setTimeout(() => (resultWindow.style.display = 'none'), 5000);
    }

    function UpdateHistoryAndLastGames(bgColor, userColor, finalColor, betBefore, betAfter) {
        setWheelHistoryArray((prev) => {
            const current = [finalColor, ...prev];
            current.length > WHEEL_HISTORY_ARRAY_LIMIT && current.pop();
            return current;
        });
        setWheelLastGamesArray((prev) => {
            const current = [{ bgColor, userColor, finalColor, betBefore, betAfter }, ...prev];
            current.length > WHEEL_LAST_GAMES_ARRAY_LIMIT && current.pop();
            return current;
        });
    }

    function UpdateWheelStatistics(key, isWin, finalColor, moneyWon) {
        if (key == 'start') {
            setWheelStatistics((stats) => ({
                ...stats,
                totalSpins: stats.totalSpins + 1,
                totalMoneyBet: stats.totalMoneyBet + spinInfo.bet,
                redChoosed: stats.redChoosed + (spinInfo.color == 'Red' ? 1 : 0),
                blackChoosed: stats.blackChoosed + (spinInfo.color == 'Black' ? 1 : 0),
                yellowChoosed: stats.yellowChoosed + (spinInfo.color == 'Yellow' ? 1 : 0),
                greenChoosed: stats.greenChoosed + (spinInfo.color == 'Green' ? 1 : 0),
            }));
        } else if (key == 'finish') {
            setWheelStatistics((stats) => ({
                ...stats,
                totalWins: stats.totalWins + (isWin ? 1 : 0),
                totalMoneyWon: stats.totalMoneyWon + (isWin ? moneyWon : 0),
                winPercentage:
                    Math.round(((stats.totalWins + (isWin ? 1 : 0)) / stats.totalSpins) * 1000) /
                    10,
                moneyProfit: stats.totalMoneyWon + (isWin ? moneyWon : 0) - stats.totalMoneyBet,
                redWon: stats.redWon + (isWin && finalColor == 'Red' ? 1 : 0),
                blackWon: stats.blackWon + (isWin && finalColor == 'Black' ? 1 : 0),
                yellowWon: stats.yellowWon + (isWin && finalColor == 'Yellow' ? 1 : 0),
                greenWon: stats.greenWon + (isWin && finalColor == 'Green' ? 1 : 0),
            }));
        }
    }

    return (
        <div id='wheelMainWindow'>
            <img
                id='wheelMainWindowImage'
                src='/shared-assets/images/Wheel.png'
                style={{ rotate: `${wheelAngle}deg` }}
            ></img>
            <img id='wheelMainWindowArrow' src='/shared-assets/images/WheelArrow.png'></img>
            <div id='wheelMainWindowBlur'></div>
            <button
                id='wheelMainWindowSpin'
                disabled={isDisabled || spinInfo.bet > balance || spinInfo.bet == 0}
                onClick={StartWheelSpin}
            >
                Spin {spinInfo.bet} $
            </button>
            <div id='wheelMainWindowResult'>
                <h1 id='wheelMainWindowResultColor'></h1>
                <h2 id='wheelMainWindowResultProfit'></h2>
            </div>
        </div>
    );
}
