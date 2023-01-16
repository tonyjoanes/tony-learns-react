import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
    const inputType = 'number';
    const minValue = 5;

    return (
        <div className="wrapper">
            <textarea
                readOnly={true}
                maxLength={3}
                spellCheck={true}
                style={{ backgroundColor: 'gray' }}
            />
        </div>
    )
}

root.render(<App />);