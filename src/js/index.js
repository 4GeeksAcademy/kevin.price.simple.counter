import React from 'react';
import ReactDOM from 'react-dom/client';
import { SecondsCounter } from './components/SecondsCounter';
import '../styles/index.css';

let secondsCounter = 0;
function render() {
    const root = ReactDOM.createRoot(document.querySelector('#app'));
    root.render(
        <div className="container d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
            <SecondsCounter seconds={secondsCounter} />
        </div>
    );
}
window.addEventListener('load', () => {
    render();
});
setInterval(() => {
    secondsCounter++;
    render();
}, 1000);