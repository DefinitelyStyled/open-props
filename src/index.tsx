import React from 'react';
import { createRoot } from 'react-dom/client';
import './demo/globals.st.css';
import 'open-props/style'; // load open-props impl for demo
import { Demo } from './demo/demo';

createRoot(document.body.appendChild(document.createElement('div'))).render(
    <React.StrictMode>
        <Demo />
    </React.StrictMode>
);
