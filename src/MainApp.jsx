import './MainApp.css';
import Header from './components/Header';
import GameCard from './components/GameCard';
import { userBalance } from './data';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export default function App() {
    return (
        <>
            <Header page="Main page" balance={userBalance} />
            <main>
                <section id="gamesSection">
                    <h1>Games</h1>
                    <div id="gamesContainer">
                        <GameCard game="Wheel" />
                        <GameCard game="Roulette" />
                    </div>
                </section>
            </main>
            <pre>
                <button onClick={() => signOut(auth)}>Sign out</button>
            </pre>
        </>
    );
}
