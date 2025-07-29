import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './MainApp.jsx';

import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`Signed in with uid ${user.uid}`);
    } else {
        console.log('No signed in user');
    }

    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});
