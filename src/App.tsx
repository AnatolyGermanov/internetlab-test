import React from 'react';
import { Provider } from 'react-redux';

import './assets/styles/styles.scss';

import { store } from './store/store';
import Home from './pages/Home/Home';

function App() {
    return (
        <Provider store={store}>
            <Home />;
        </Provider>
    );
}

export default App;
