import { auth, firestore } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const htmlElement = document.documentElement;
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

export const updateUserSettings = (settings) => {
    userSettings = settings;
    ApplyTheme();
};

export function ApplyTheme() {
    htmlElement.classList.remove('lightTheme', 'darkTheme');
    
    switch (userSettings.theme) {
        case 'Light':
            htmlElement.classList.add('lightTheme');
            break;
        case 'Dark':
        default:
            htmlElement.classList.add('darkTheme');
            break;
    }
};

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
    'Roulette games',
    'Slots games'
];

export const OVERALL_STATISTICS_CHARS = [ '$', '$', '$', '$', '$', '$', '', '', '', '%', '', '', '' ];

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
    Roulette: 'Roulette consists of 30 parts: 14 red, 14 black and 2 purple',
    Slots: 'The final award is calculating by multiplying base koaf of figure you picked and count of slots you predicted right \
    : 1 slot - 0.1, 2 slots - 1, 3 slots - 5. Than more base koaf of figure than less often this figure dropping',
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
    },
    Slots: {
        id: 'slotsCard',
        background: 'linear-gradient(to right bottom, #B34444, #B39044)',
        blurBackground: 'linear-gradient(to right bottom, #B3444400, var(--slotsBlurColor))',
        image: '/JTP/shared-assets/images/Slots.png',
        imageId: 'slotsImage',
        navigateTo: '/slots'
    }
};

// Bet settings

export let BET_VALUES = [ 1, 5, 10, 20, 50 ];

// Color / Koaf values

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

export const SLOTS_FIGURE_VALUES = [ 'Cubes', 'Star', 'Sticks', 'Emerald', 'Seven' ];

export const SLOTS_KOAF_VALUES = {
    Cubes: 2,
    Star: 2,
    Sticks: 5,
    Emerald: 10,
    Seven: 20
};

export const FIGURE_BY_VALUE = {
    Cubes: '/JTP/shared-assets/images/SlotsImageCubes.png',
    Star: '/JTP/shared-assets/images/SlotsImageStar.png',
    Sticks: '/JTP/shared-assets/images/SlotsImageSticks.png',
    Emerald: '/JTP/shared-assets/images/SlotsImageEmerald.png',
    Seven: '/JTP/shared-assets/images/SlotsImageSeven.png'
};

export const COLOR_BY_VALUE = {
    Red: 'FF4B4B',
    Black: '181818',
    Yellow: 'DEC84A',
    Green: '56D86A',
    Purple: 'B356D8'
}

// Local storage (History, last games)

export function GetFromLocalStorageByKey(key) {
    let _data = window.localStorage.getItem(key);
    return _data != null ? JSON.parse(_data) : [];
}

export const HISTORY_LIMIT = 40;
export const LAST_GAMES_LIMIT = 24;

// Statistics

export async function GetStatisticsByKey(key) {
    try {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        return snapshot.data()[key];
    } catch (error) {
        console.log(error.message);
    }
}

export async function UpdateStatisticsByKey(key, stats) {
    try {
        updateDoc(doc(firestore, 'users', auth.currentUser.uid), { [key]: stats });
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

export const SLOTS_STATISTICS_TEXTS = [
    'Total spins',
    'Total wins',
    'Total money bet',
    'Total money won',
    'Win percentage',
    'Money profit',
    'Cubes choosed',
    'Cubes won',
    'Star choosed',
    'Star won',
    'Sticks choosed',
    'Sticks won',
    'Emerald choosed',
    'Emerald won',
    'Seven choosed',
    'Seven won'
];

export const SLOTS_STATISTICS_CHARS = [ '', '', '$', '$', '%', '$', '', '', '', '', '', '', '', '', '', '' ];

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
    updateEmail: {
        title: 'Changing email',
        subtitle: 'After changing email you will need to verify your new email and relogin',
        confirmBackground: '#44aa44',
        confirmText: 'Change email',
        confirmIcon: '/JTP/shared-assets/images/ArrowRight.svg'
    },
    updatePassword: {
        title: 'Changing password',
        subtitle: 'Enter your current email and password and provide the new password',
        confirmBackground: '#44aa44',
        confirmText: 'Change password',
        confirmIcon: '/JTP/shared-assets/images/ArrowRight.svg'
    },
    updateUsername: {
        title: 'Changing username',
        subtitle: 'Provide new username',
        confirmBackground: '#44aa44',
        confirmText: 'Change username',
        confirmIcon: '/JTP/shared-assets/images/ArrowRight.svg'
    },
    signOut: {
        title: 'Signing out',
        subtitle: 'You will need to login again after signing out from account',
        confirmBackground: '#aa4444',
        confirmText: 'Sign out',
        confirmIcon: '/JTP/shared-assets/images/ArrowRight.svg'
    },
    deleteAccount: {
        title: 'Deleting account',
        subtitle: 'WARNING! This action cannot be undone - all your data will be lost',
        confirmBackground: '#cc2222',
        confirmText: 'Delete account',
        confirmIcon: '/JTP/shared-assets/images/RemoveCircleIcon.svg'
    }
}