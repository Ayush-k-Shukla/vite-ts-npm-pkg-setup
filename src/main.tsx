import { Provider as InversifyProvider } from 'inversify-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { di } from './core/injection_container';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <InversifyProvider container={di}>
            {/* <ReduxProvider store={reduxStore}> */}
            <App />
            {/* </ReduxProvider> */}
        </InversifyProvider>
    </React.StrictMode>,
);
