import './index.css';
import App from './RouletteApp';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const rootElement = document.getElementById('root');
let root;

onAuthStateChanged(auth, (user) => {
    if (user?.emailVerified) {
        console.log(`Signed in with uid ${user.uid}`);
    } else {
        console.log('No signed in user');
    }

    if (!root) root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});