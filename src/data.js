import { auth, firestore } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const htmlElement = document.getElementsByTagName('html')[0];
export const pxToNum = (value) => parseFloat(value.replace('px', ''));

// User data

let funcOnLoad;
export function SetFuncOnLoad(func) {
    funcOnLoad = func;
};
export let isUserDataLoaded = false;

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

export async function UpdateOverallStatistics(stats) {
    if (!auth.currentUser) return;
    try {
        updateDoc(doc(firestore, 'users', auth.currentUser.uid), {
            overallStatistics: stats
        });
    } catch (error) {
        console.log(error.message);
    }
}

export let username;
export let registerDate;
export let registerDaysAgo;

let _userSettings = window.localStorage.getItem('userSettings');
export let userSettings = _userSettings != null ? JSON.parse(_userSettings) : {
    theme: 'Dark',
    fontSize: 'Medium'
};

export const updateUserSettings = (settings) => userSettings = settings;

export const OVERALL_STATISTICS_TEXTS = [
    'Money funded',
    'Money withdrawed',
    'Money bet',
    'Money won',
    'Average bet',
    'Average win',
    'Games',
    'Favorite game',
    'Wins',
    'Win percentage',
    'Wheel games',
    'Roulette games'
];

export const OVERALL_STATISTICS_CHARS = [ '$', '$', '$', '$', '$', '$', '', '', '', '%', '', '' ];

export async function GetUserData() {
    function GetRegisterDaysAgo() {
        const now = Date.now();
        const prev = Date.parse(registerDate);
        const dif = (now - prev) / 1000 / 60 / 60 / 24; // seconds -> minutes -> hours -> days

        registerDaysAgo = parseInt(dif);
    }

    if (!auth.currentUser) {
        isUserDataLoaded = true;
        if (funcOnLoad) funcOnLoad(true);
        return;
    }
    
    try {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        const data = snapshot.data();

        username = data.username;
        registerDate = data.registerDate;
        GetRegisterDaysAgo();
        funcOnLoad(true);
    } catch (error) {
        console.log(error.message);
    }
}

// Header, Main page

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

// Bet settings

export let BET_VALUES = [ 1, 5, 10, 20, 50 ];

// Color values

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

// History, Last games, Statistics

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

export async function GetWheelStatistics() {
    try {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        const wheelStatistics = snapshot.data().wheelStatistics;
        return wheelStatistics;
    } catch (error) {
        console.log(error.message);
    }
}

export async function UpdateWheelStatistics(stats) {
    try {
        updateDoc(doc(firestore, 'users', auth.currentUser.uid), { wheelStatistics: stats });
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

export async function GetRouletteStatistics() {
    try {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        const rouletteStatistics = snapshot.data().rouletteStatistics;
        return rouletteStatistics;
    } catch (error) {
        console.log(error.message);
    }
}

export async function UpdateRouletteStatistics(stats) {
    try {
        updateDoc(doc(firestore, 'users', auth.currentUser.uid), { rouletteStatistics: stats });
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

// Profile

export const SIDEBAR_TEXTS = [
    'Profile',
    'Statistics',
    'Account',
    'Appearance',
    'Language'
];

// Alert

export const ALERT_DATA = {
    signOut: {
        title: 'You want sign out?',
        subtitle: 'You will need to login again after signing out from account',
        confirmBackground: '#aa4444',
        confirmText: 'Sign out',
        confirmIcon: '/JTP/shared-assets/images/ArrowRight.svg'
    },
    deleteAccount: {
        title: 'Deleting account',
        subtitle: 'This action cannot be undone: all your data will be lost',
        confirmBackground: '#cc2222',
        confirmText: 'Delete account',
        confirmIcon: '/JTP/shared-assets/images/RemoveCircleIcon.svg'
    }
}