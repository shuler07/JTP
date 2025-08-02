import './MainApp.css';
import Header from './components/Header';
import GameCard from './components/main/GameCard';

import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth, firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function App() {
    // Balance

    const [balance, setBalance] = useState(window.sessionStorage.getItem('balance'));

    async function GetBalance() {
        const snapshot = await getDoc(doc(firestore, 'users', auth.currentUser.uid));
        setBalance(snapshot.data().balance);
    }

    if (auth.currentUser) GetBalance();

    return (
        <>
            <Header page="Main page" balance={balance} />
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
