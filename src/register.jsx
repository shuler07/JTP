import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './RegisterApp';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = 'index.html';
    } else {
        createRoot(document.getElementById('root')).render(
            <StrictMode>
                <App />
            </StrictMode>
        );
    }
});
