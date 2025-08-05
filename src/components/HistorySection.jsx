import './HistorySection.css';
import { useRef } from 'react';

export default function HistorySection({ historyArray }) {
    const historyContainer = useRef();

    function GetHistory() {
        if (historyArray.length == 0) {
            return (
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
        }
        return historyArray.map((color, index) => <div key={`keyHistory${index}`} className={`historyElement ${color}`}></div>);
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
        <div className='sideSection' id='historySection'>
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