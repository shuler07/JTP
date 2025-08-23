import { useEffect, useMemo, useRef, useState, useContext } from 'react';

import SlotsMainContainer from './SlotsMainContainer';
import SlotsSideContainer from './SlotsSideContainer';
import ResultContainer from '../ResultContainer';

import { HISTORY_LIMIT, LAST_GAMES_LIMIT, SLOTS_FIGURE_VALUES, SLOTS_KOAF_VALUES } from '../../data';
import { AppContext } from '../../MainApp';
import { SlotsContext } from '../../SlotsPageApp';

const SUBKOAF_BY_FINALCOUNT = { 0: 0, 1: 0.1, 2: 1, 3: 5 };

export default function SlotsMainWindow() {
    // Context

    const context = useContext(AppContext);
    const slotsContext = useContext(SlotsContext);

    const balance = context.balance;
    const setBalance = context.setBalance;
    const setOverallStatistics = context.setOverallStatistics;

    const spinInfo = slotsContext.spinInfo;
    const isDisabled = slotsContext.isDisabled;
    const setIsDisabled = slotsContext.setIsDisabled;
    const history = slotsContext.history;
    const setHistory = slotsContext.setHistory;
    const setLastGames = slotsContext.setLastGames;
    const setStatistics = slotsContext.setStatistics;

    // Slots mechanics

    const [slot1, setSlot1] = useState(4);
    const [slot2, setSlot2] = useState(4);
    const [slot3, setSlot3] = useState(4);
    const slotElem1 = useRef();
    const slotElem2 = useRef();
    const slotElem3 = useRef();
    useEffect(() => {
        if (slotElem1.current) ResetAnim(slotElem1.current);
    }, [slot1]);
    useEffect(() => {
        if (slotElem2.current) ResetAnim(slotElem2.current);
    }, [slot2]);
    useEffect(() => {
        if (slotElem3.current) ResetAnim(slotElem3.current);
    }, [slot3]);

    const slotSpins1 = useRef(0);
    const slotSpins2 = useRef(0);
    const slotSpins3 = useRef(0);

    const isSpinning = useRef([false, false, false]);

    const [isGameFinished, setIsGameFinished] = useState(false);
    useEffect(() => {
        if (isGameFinished) {
            setIsGameFinished(false);
            FinishSlotsSpin();
        }
    }, [isGameFinished]);

    function ResetAnim(parent) {
        const elem1 = parent.children[0];
        const elem2 = parent.children[1];

        elem1.style.display = 'block';
        elem1.style.animation = 'none';
        void elem1.offsetWidth;
        elem1.style.animation = '';
        elem1.style.animation = 'slotItemAnim 0.25s forwards';

        elem2.style.display = 'block';
        elem2.style.animation = 'none';
        void elem2.offsetWidth;
        elem2.style.animation = '';
        elem2.style.animation = 'slotItemAnim 0.25s forwards';

        const handleAnimationEnd1 = () => {
            elem1.removeEventListener('animationend', handleAnimationEnd1);
        };

        const handleAnimationEnd2 = () => {
            elem2.removeEventListener('animationend', handleAnimationEnd2);
        };

        elem1.addEventListener('animationend', handleAnimationEnd1);
        elem2.addEventListener('animationend', handleAnimationEnd2);
    }

    function StartSlotsSpin() {
        slotSpins1.current = 10 + parseInt(Math.random() * 10); // From 10 to 20
        slotSpins2.current = 10 + parseInt(Math.random() * 5); // From 10 to 15
        slotSpins3.current = parseInt(Math.random() * 5); // From 0 to 5
        isSpinning.current = [true, true, true];

        setIsDisabled(true);
        setBalance((prev) => prev - spinInfo.bet);
        UpdateSlotsStatistics('start');

        SlotsSpin();
    }

    function SlotsSpin() {
        function RandomizeSpin(slot, figure) {
            let value;
            if (figure == 0 || figure == 1) {
                value = 1;
            } else if (figure == 2) {
                value = Math.random() * 2.5;
            } else if (figure == 3) {
                value = Math.random() * 5;
            } else if (figure == 4) {
                value = Math.random() * 7.5;
            }
            isSpinning.current[slot] = value <= 1 ? false : true;
        }

        if (isSpinning.current[0]) {
            setSlot1((prev) => (prev + 1) % 5);
            setSlot2((prev) => (prev + 1) % 5);
            setSlot3((prev) => (prev + 1) % 5);
            if (slotSpins1.current == 0) RandomizeSpin(0, (slot1 + 1) % 5);
            else slotSpins1.current -= 1;
        } else if (isSpinning.current[1]) {
            setSlot2((prev) => (prev + 1) % 5);
            setSlot3((prev) => (prev + 1) % 5);
            if (slotSpins2.current == 0) RandomizeSpin(1, (slot2 + 1) % 5);
            else slotSpins2.current -= 1;
        } else if (isSpinning.current[2]) {
            setSlot3((prev) => (prev + 1) % 5);
            if (slotSpins3.current == 0) RandomizeSpin(2, (slot3 + 1) % 5);
            else slotSpins3.current -= 1;
        } else {
            setIsGameFinished(true);
            return;
        }

        setTimeout(SlotsSpin, 250);
    }

    function FinishSlotsSpin() {
        const finalFigures = [
            SLOTS_FIGURE_VALUES[(slot1 + 1) % 5],
            SLOTS_FIGURE_VALUES[(slot2 + 1) % 5],
            SLOTS_FIGURE_VALUES[(slot3 + 1) % 5],
        ];
        const finalCount = finalFigures.reduce((acc, value) => acc + (value === spinInfo.figure), 0);
        console.log('Final figures:', finalFigures.join(' '), '; Final count:', finalCount);

        const isWin = finalCount >= 1;
        const bgColor = isWin ? '5C9E5E' : '9E5C5C';
        const koaf = SLOTS_KOAF_VALUES[spinInfo.figure];
        const moneyWon = spinInfo.bet * koaf * SUBKOAF_BY_FINALCOUNT[finalCount];
        const profit =
            moneyWon !== 0
                ? moneyWon - spinInfo.bet >= 0
                    ? `+ ${moneyWon - spinInfo.bet} $`
                    : `- ${spinInfo.bet - moneyWon} $`
                : `- ${spinInfo.bet} $`;

        setIsDisabled(false);
        if (isWin) setBalance((prev) => prev + moneyWon);
        UpdateSlotsStatistics('finish', isWin, finalFigures, moneyWon);
        ShowGameResult(bgColor, finalFigures, finalCount, koaf, isWin, profit);
        UpdateHistoryAndLastGames(bgColor, spinInfo.figure, finalFigures, spinInfo.bet, isWin ? moneyWon : 0);
    }

    function ShowGameResult(bgColor, finalFigures, finalCount, koaf, isWin, profit) {
        const resultContainer = document.getElementById('resultContainer');
        const resultFigure = document.getElementById('resultGame');
        const resultProfit = document.getElementById('resultProfit');

        resultContainer.style.display = 'flex';
        resultContainer.style.background = `radial-gradient(#${bgColor} 5%, #${bgColor}77)`;
        resultFigure.textContent = isWin
            ? `${finalCount} ${spinInfo.figure} x${koaf * SUBKOAF_BY_FINALCOUNT[finalCount]}`
            : finalFigures.join(', ');
        resultProfit.textContent = profit;

        setTimeout(() => (resultContainer.style.display = 'none'), 5000);
    }

    function UpdateHistoryAndLastGames(bgColor, userFigure, finalFigures, betBefore, betAfter) {
        setHistory((prev) => {
            const current = [finalFigures, ...prev];
            current.length > HISTORY_LIMIT && current.pop();
            return current;
        });
        setLastGames((prev) => {
            const current = [{ bgColor, userFigure, finalFigures, betBefore, betAfter }, ...prev];
            current.length > LAST_GAMES_LIMIT && current.pop();
            return current;
        });
    }

    function UpdateSlotsStatistics(key, isWin, finalFigures, moneyWon) {
        if (key == 'start') {
            setStatistics((stats) => {
                let newStats = [...stats];

                newStats[0] += 1; // totalSpins
                newStats[2] += spinInfo.bet; // totalMoneyBet
                if (spinInfo.figure === 'Cubes') newStats[6] += 1; // cubesChoosed
                if (spinInfo.figure === 'Star') newStats[8] += 1; // starChoosed
                if (spinInfo.figure === 'Sticks') newStats[10] += 1; // sticksChoosed
                if (spinInfo.figure === 'Emerald') newStats[12] += 1; // emeraldChoosed
                if (spinInfo.figure === 'Seven') newStats[14] += 1; // sevenChoosed
                return newStats;
            });
            setOverallStatistics((stats) => {
                let newStats = [...stats];

                newStats[2] += spinInfo.bet; // moneyBet
                newStats[4] = Math.round(((stats[2] + spinInfo.bet) / (stats[6] + 1)) * 100) / 100; // averageBet
                newStats[6] += 1; // games
                if (stats[12] + 1 > stats[10] && stats[12] + 1 > stats[11]) newStats[7] = 'Slots'; // favoriteGame
                newStats[12] += 1; // slotsGames
                return newStats;
            });
        } else if (key == 'finish') {
            setStatistics((stats) => {
                let newStats = [...stats];

                if (isWin) newStats[1] += 1; // totalWins
                if (isWin) newStats[3] += moneyWon; // totalMoneyWon
                newStats[4] = Math.round(((stats[1] + (isWin ? 1 : 0)) / stats[0]) * 1000) / 10; // winPercentage
                newStats[5] = stats[3] + (isWin ? moneyWon : 0) - stats[2]; // moneyProfit
                if (isWin && spinInfo.figure === 'Cubes') newStats[7] += 1; // cubesWon
                if (isWin && spinInfo.figure === 'Star') newStats[9] += 1; // starWon
                if (isWin && spinInfo.figure === 'Sticks') newStats[11] += 1; // sticksWon
                if (isWin && spinInfo.figure === 'Emerald') newStats[13] += 1; // emeraldWon
                if (isWin && spinInfo.figure === 'Seven') newStats[15] += 1; // sevenWon
                return newStats;
            });
            setOverallStatistics((stats) => {
                let newStats = [...stats];

                if (isWin) newStats[3] += moneyWon; // moneyWon
                newStats[5] = Math.round(((stats[3] + (isWin ? moneyWon : 0)) / stats[6]) * 100) / 100; // averageWin
                if (isWin) newStats[8] += 1; // wins
                newStats[9] = Math.round(((stats[8] + (isWin ? 1 : 0)) / stats[6]) * 1000) / 10; // winPercentage
                return newStats;
            });
        }
    }

    // Memo

    const MemoizedSlotsSideContainer = useMemo(
        () => <SlotsSideContainer startEvent={StartSlotsSpin} />,
        [balance, spinInfo, isDisabled, history]
    );

    return (
        <div className='mainGameWindow' style={{ background: 'linear-gradient(to right, #B34444, #B39044)' }}>
            <SlotsMainContainer slots={[slot1, slot2, slot3]} slotsElems={[slotElem1, slotElem2, slotElem3]} />
            {MemoizedSlotsSideContainer}
            <ResultContainer />
        </div>
    );
}
