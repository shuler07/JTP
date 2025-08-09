import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import App from './MainApp.jsx';

import { GetUserData } from './data.js';

const rootElement = document.getElementById('root');
let root;

onAuthStateChanged(auth, (user) => {
    if (user?.emailVerified) {
        console.log(`Signed in with uid ${user.uid}`);
    } else {
        console.log('No signed in user');
    }
    GetUserData();

    if (!root) root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});
