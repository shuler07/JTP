import './WheelHistoryWindow.css';

export default function WheelHistoryWindow({ wheelHistoryArray }) {
    function GetHistory() {
        if (wheelHistoryArray.length == 0) {
            return (
                <h6
                    style={{
                        position: 'absolute',
                        width: 'calc(100% - 40px)',
                        height: '110px',
                        lineHeight: '110px',
                        textAlign: 'center',
                        color: 'gray',
                    }}
                >
                    Spin wheel to see games history
                </h6>
            );
        }
        return wheelHistoryArray.map((color, index) => (
            <div key={index} className={`wheelHistoryElement ${color}`}></div>
        ));
    }

    return (
        <div id="wheelHistoryWindow">
            <h2>History</h2>
            <div id="wheelHistoryContainer">{GetHistory()}</div>
        </div>
    );
}
