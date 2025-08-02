import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './RegisterApp';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const rootElement = document.getElementById('root');
let root;

onAuthStateChanged(auth, (user) => {
    if (!user?.emailVerified) {
        if (rootElement.childElementCount == 0) root = createRoot(rootElement);
        
        root.render(
            <StrictMode>
                <App />
            </StrictMode>
        );
    }
});
