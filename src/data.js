import { auth, firestore } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function UpdateBalance(balance) {
    if (!auth.currentUser) return;
    try {
        updateDoc(doc(firestore, 'users', auth.currentUser.uid), {
            balance: balance
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const HEADER_POPUP_TEXTS = {
    Wheel: 'Wheel consists of 40 parts: 18 red, 18 black, 3 yellow and 1 green',
    Roulette: 'Roulette consists of 30 parts: 14 red, 14 black and 2 purple'
};

export const GAME_CARDS_DATA = {
    Wheel: {
        id: 'wheelCard',
        background: 'linear-gradient(to right bottom, #4C9AFF, #9137BB)',
        blurBackground: 'linear-gradient(to right bottom, #4C9AFF00, var(--wheelBlurColor))',
        image: `/JTP/shared-assets/images/Wheel.png`,
        imageId: 'wheelImage',
        navigateTo: '/wheel'
    },
    Roulette: {
        id: 'rouletteCard',
        background: 'linear-gradient(to right bottom, #50B85F, #3B9C96)',
        blurBackground: 'linear-gradient(to right bottom, #50B85F00, var(--rouletteBlurColor))',
        image: `/JTP/shared-assets/images/Roulette.png`,
        imageId: 'rouletteImage',
        navigateTo: '/roulette'
    }
};



export let BET_VALUES = [ 1, 5, 10, 20, 50 ];



export const WHEEL_COLOR_VALUES = [ 'Red', 'Black', 'Yellow', 'Green' ];

export const WHEEL_KOAF_VALUES = {
    Red: 2,
    Black: 2,
    Yellow: 5,
    Green: 20
};

export const ROULETTE_COLOR_VALUES = [ 'Red', 'Black', 'Purple' ];

export const ROULETTE_KOAF_VALUES = {
    Red: 2,
    Black: 2,
    Purple: 10
};

export const ATTR_BY_COLOR_VALUES = {
    Red: 'FF4B4B',
    Black: '181818',
    Yellow: 'DEC84A',
    Green: '56D86A',
    Purple: 'B356D8'
}



export function GetWheelHistoryArray() {
    let _wheel_history_array = window.localStorage.getItem('WHEEL_HISTORY_ARRAY');
    return _wheel_history_array != null ? JSON.parse(_wheel_history_array) : []
}
export const WHEEL_HISTORY_ARRAY_LIMIT = 40;

export function GetWheelLastGamesArray() {
    let _wheel_last_games_array = window.localStorage.getItem('WHEEL_LAST_GAMES_ARRAY');
    return _wheel_last_games_array != null ? JSON.parse(_wheel_last_games_array) : [];
}
export const WHEEL_LAST_GAMES_ARRAY_LIMIT = 24;

export function GetRouletteHistoryArray() {
    let _roulette_history_array = window.localStorage.getItem('ROULETTE_HISTORY_ARRAY');
    return _roulette_history_array != null ? JSON.parse(_roulette_history_array) : [];
}
export const ROULETTE_HISTORY_ARRAY_LIMIT = 40;

export function GetRouletteLastGamesArray() {
    let _roulette_last_games_array = window.localStorage.getItem('ROULETTE_LAST_GAMES_ARRAY');
    return _roulette_last_games_array != null ? JSON.parse(_roulette_last_games_array) : [];
}
export const ROULETTE_LAST_GAMES_ARRAY_LIMIT = 24;


function WheelStatsToObject(array) {    
    return {
        totalSpins: array[0],
        totalWins: array[1],
        totalMoneyBet: array[2],
        totalMoneyWon: array[3],
        winPercentage: array[4],
        moneyProfit: array[5],
        redChoosed: array[6],
        redWon: array[7],
        blackChoosed: array[8],
        blackWon: array[9],
        yellowChoosed: array[10],
        yellowWon: array[11],
        greenChoosed: array[12],
        greenWon: array[13]
    };
}

function WheelStatsToArray(obj) {    
    return [
        obj.totalSpins || 0,
        obj.totalWins || 0,
        obj.totalMoneyBet || 0,
        obj.totalMoneyWon || 0,
        obj.winPercentage || 0,
        obj.moneyProfit || 0,
        obj.redChoosed || 0,
        obj.redWon || 0,
        obj.blackChoosed || 0,
        obj.blackWon || 0,
        obj.yellowChoosed || 0,
        obj.yellowWon || 0,
        obj.greenChoosed || 0,
        obj.greenWon || 0
    ];
}

export async function GetWheelStatistics() {
    try {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        const wheelStatistics = snapshot.data().wheelStatistics;
        return WheelStatsToObject(wheelStatistics);
    } catch (error) {
        console.log(error.message);
    }
}

export async function UpdateWheelStatistics(stats) {
    try {
        const statsArray = WheelStatsToArray(stats);
        updateDoc(doc(firestore, 'users', auth.currentUser.uid), { wheelStatistics: statsArray });
    } catch (error) {
        console.log(error.message);
    }
}

export const WHEEL_STATISTICS_TEXTS = [
    'Total spins',
    'Total wins',
    'Total money bet',
    'Total money won',
    'Win percentage',
    'Money profit',
    'Red choosed',
    'Red won',
    'Black choosed',
    'Black won',
    'Yellow choosed',
    'Yellow won',
    'Green choosed',
    'Green won'
];

export const WHEEL_STATISTICS_CHARS = [ '', '', '$', '$', '%', '$', '', '', '', '', '', '', '', '' ];



function RouletteStatsToObject(array) {
    return {
        totalSpins: array[0],
        totalWins: array[1],
        totalMoneyBet: array[2],
        totalMoneyWon: array[3],
        winPercentage: array[4],
        moneyProfit: array[5],
        redChoosed: array[6],
        redWon: array[7],
        blackChoosed: array[8],
        blackWon: array[9],
        purpleChoosed: array[10],
        purpleWon: array[11]
    };
}

function RouletteStatsToArray(obj) {
     return [
        obj.totalSpins || 0,
        obj.totalWins || 0,
        obj.totalMoneyBet || 0,
        obj.totalMoneyWon || 0,
        obj.winPercentage || 0,
        obj.moneyProfit || 0,
        obj.redChoosed || 0,
        obj.redWon || 0,
        obj.blackChoosed || 0,
        obj.blackWon || 0,
        obj.purpleChoosed || 0,
        obj.purpleWon || 0
    ];
}

export async function GetRouletteStatistics() {
    try {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        const rouletteStatistics = snapshot.data().rouletteStatistics;
        return RouletteStatsToObject(rouletteStatistics);
    } catch (error) {
        console.log(error.message);
    }
}

export async function UpdateRouletteStatistics(stats) {
    try {
        const statsArray = RouletteStatsToArray(stats);
        updateDoc(doc(firestore, 'users', auth.currentUser.uid), { rouletteStatistics: statsArray });
    } catch (error) {
        console.log(error.message);
    }
}

export const ROULETTE_STATISTICS_TEXTS = [
    'Total spins',
    'Total wins',
    'Total money bet',
    'Total money won',
    'Win percentage',
    'Money profit',
    'Red choosed',
    'Red won',
    'Black choosed',
    'Black won',
    'Purple choosed',
    'Purple won'
];

export const ROULETTE_STATISTICS_CHARS = [ '', '', '$', '$', '%', '$', '', '', '', '', '', '' ];



export const SIDEBAR_TEXTS = [
    'Profile',
    'Statistics',
    'Account',
    'Appearance',
    'Language'
];