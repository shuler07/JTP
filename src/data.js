const _userBalance = window.localStorage.getItem('balance');
export let userBalance = _userBalance != null ? parseFloat(_userBalance) : 0;

export const HEADER_POPUP_TEXTS = {
    Wheel: 'Wheel consists of 40 parts. Chances are: Red - 45%, Black - 45%, Yellow - 7.5%, Green - 2.5%',
    Roulette: 'TODO'
};

export const GAME_CARDS_DATA = {
    Wheel: {
        id: 'wheelCard',
        background: 'linear-gradient(to right bottom, #477DBA, #375FAA)',
        blurBackground: 'linear-gradient(to right bottom, #477DBA00, var(--wheelBlurColor) 90%)',
        image: '/shared-assets/images/Wheel.png',
        imageId: 'wheelImage',
        navigateTo: 'wheel.html'
    },
    Roulette: {
        id: 'rouletteCard',
        background: 'linear-gradient(to right bottom, #477DBA, #375FAA)',
        blurBackground: 'linear-gradient(to right bottom, #477DBA00, var(--rouletteBlurColor) 90%)',
        image: '/shared-assets/images/Wheel.png',
        imageId: 'rouletteImage',
        navigateTo: 'roulette.html'
    }
};



export let BET_VALUES = [ 1, 5, 10, 20, 50 ];

export const COLOR_VALUES = [ 'Red', 'Black', 'Yellow', 'Green' ];

export const KOAF_BY_COLOR_VALUES = {
    Red: 2,
    Black: 2,
    Yellow: 5,
    Green: 10
};

export const ATTR_BY_COLOR_VALUES = {
    Red: 'FF4B4B',
    Black: '181818',
    Yellow: 'DEC84A',
    Green: '56D86A'
}

let _wheel_history_array = window.localStorage.getItem('WHEEL_HISTORY_ARRAY');
export const WHEEL_HISTORY_ARRAY = _wheel_history_array != null ? JSON.parse(_wheel_history_array) : [];
export const WHEEL_HISTORY_ARRAY_LIMIT = 24;

let _wheel_last_games_array = window.localStorage.getItem('WHEEL_LAST_GAMES_ARRAY');
export const WHEEL_LAST_GAMES_ARRAY = _wheel_last_games_array != null ? JSON.parse(_wheel_last_games_array) : [];
export const WHEEL_LAST_GAMES_ARRAY_LIMIT = 24;

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