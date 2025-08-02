import './index.css';
import App from './WheelApp.jsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

const rootElement = document.getElementById('root');
let root;

onAuthStateChanged(auth, (user) => {
    if (user?.emailVerified) {
        console.log(`Signed in with uid ${user.uid}`);
    } else {
        console.log('No signed in user');
    }

    if (rootElement.childElementCount == 0) root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});
