import './MainPageApp.css';

import { useContext, useEffect } from 'react';
import { AppContext } from './MainApp';

import GameCard from './components/main/GameCard';

export default function MainPageApp() {
    const context = useContext(AppContext);
    useEffect(() => {
        context.setPage('Main page');
    }, []);

    return (
        <main>
            <section id='gamesSection'>
                <h1>Games</h1>
                <div id='gamesContainer'>
                    <GameCard game='Wheel' />
                    <GameCard game='Roulette' />
                    <GameCard game='Slots' />
                </div>
            </section>
        </main>
    );
}
