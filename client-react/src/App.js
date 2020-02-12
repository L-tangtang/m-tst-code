import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router/config';
import Views from './router/views';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Views routes={Routes} />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
