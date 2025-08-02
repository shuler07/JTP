import { auth, firestore } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function UpdateBalance(balance) {
    try {
        await updateDoc(doc(firestore, 'users', auth.currentUser.uid), {
            balance: balance
        })
        window.sessionStorage.setItem('balance', balance);
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
        image: './shared-assets/images/Wheel.png',
        imageId: 'wheelImage',
        navigateTo: 'wheel.html'
    },
    Roulette: {
        id: 'rouletteCard',
        background: 'linear-gradient(to right bottom, #50B85F, #3B9C96)',
        blurBackground: 'linear-gradient(to right bottom, #50B85F00, var(--rouletteBlurColor))',
        image: './shared-assets/images/Roulette.png',
        imageId: 'rouletteImage',
        navigateTo: 'roulette.html'
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



let _wheel_history_array = window.localStorage.getItem('WHEEL_HISTORY_ARRAY');
export const WHEEL_HISTORY_ARRAY = _wheel_history_array != null ? JSON.parse(_wheel_history_array) : [];
export const WHEEL_HISTORY_ARRAY_LIMIT = 24;

let _wheel_last_games_array = window.localStorage.getItem('WHEEL_LAST_GAMES_ARRAY');
export const WHEEL_LAST_GAMES_ARRAY = _wheel_last_games_array != null ? JSON.parse(_wheel_last_games_array) : [];
export const WHEEL_LAST_GAMES_ARRAY_LIMIT = 24;

let _roulette_history_array = window.localStorage.getItem('ROULETTE_HISTORY_ARRAY');
export const ROULETTE_HISTORY_ARRAY = _roulette_history_array != null ? JSON.parse(_roulette_history_array) : [];
export const ROULETTE_HISTORY_ARRAY_LIMIT = 24;

let _roulette_last_games_array = window.localStorage.getItem('ROULETTE_LAST_GAMES_ARRAY');
export const ROULETTE_LAST_GAMES_ARRAY = _roulette_last_games_array != null ? JSON.parse(_roulette_last_games_array) : [];
export const ROULETTE_LAST_GAMES_ARRAY_LIMIT = 24;



let _wheel_statistics = window.localStorage.getItem('WHEEL_STATISTICS');
export const WHEEL_STATISTICS = _wheel_statistics != null ? JSON.parse(_wheel_statistics) : {
    totalSpins: 0,
    totalWins: 0,
    totalMoneyBet: 0,
    totalMoneyWon: 0,
    winPercentage: 0,
    moneyProfit: 0,
    redChoosed: 0,
    redWon: 0,
    blackChoosed: 0,
    blackWon: 0,
    yellowChoosed: 0,
    yellowWon: 0,
    greenChoosed: 0,
    greenWon: 0
};

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

let _roulette_statistics = window.localStorage.getItem('ROULETTE_STATISTICS');
export const ROULETTE_STATISTICS = _roulette_statistics != null ? JSON.parse(_roulette_statistics) : {
    totalSpins: 0,
    totalWins: 0,
    totalMoneyBet: 0,
    totalMoneyWon: 0,
    winPercentage: 0,
    moneyProfit: 0,
    redChoosed: 0,
    redWon: 0,
    blackChoosed: 0,
    blackWon: 0,
    purpleChoosed: 0,
    purpleWon: 0
};

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