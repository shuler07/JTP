import './HistorySection.css';

import { useRef } from 'react';

import { FIGURE_BY_VALUE } from '../data';

export default function HistorySection({ history }) {
    const historyContainer = useRef();

    function GetHistory() {
        const textEmpty = () => (
            <h6
                style={{
                    width: '100%',
                    height: '100%',
                    lineHeight: '40px',
                    textAlign: 'center',
                    color: 'gray',
                }}
            >
                It seems here is nothing...
            </h6>
        );

        if (history.length == 0) return textEmpty();

        const type = Array.isArray(history[0]) ? 'figure' : 'color';

        if (type === 'color')
            return history.map((color, index) => <div key={`keyHistory${index}`} className={`historyElement ${color}`}></div>);
        if (type === 'figure')
            return history.map((figures, index) => (
                <div key={`keyHistory${index}`} style={{ display: 'flex', gap: '0.2rem', background: '#ffffff40', borderRadius: '1rem' }}>
                    {figures.map((figure, _index) => (
                        <img key={`keyHistory${index}Figure${_index}`} src={FIGURE_BY_VALUE[figure]} className='historyElement'></img>
                    ))}
                </div>
            ));
    }

    let screenX = 0;
    let isDragging = false;

    const handleMouseDown = (event) => {
        isDragging = true;
        historyContainer.current.classList.add('dragging');
        screenX = event.screenX;
    };

    function handleMouseMove(event) {
        if (isDragging) {
            const delta = event.screenX - screenX;
            historyContainer.current.scrollLeft -= delta;
        }
        screenX = event.screenX;
    }

    const handleMouseUp = () => {
        isDragging = false;
        historyContainer.current.classList.remove('dragging');
    };

    return (
        <div className='sideSection' style={{ padding: '0.75rem' }}>
            <div
                autoFocus='true'
                ref={historyContainer}
                className='sideSectionFlexContainer'
                id='historyFlexContainer'
                onDragStart={(e) => e.preventDefault()}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {GetHistory()}
            </div>
        </div>
    );
}
