import './Statistics.css';

export default function Statistics({ statistics, statisticsTexts, statisticsChars }) {
    function GetStatistics() {
        if (statistics.length == 0) {
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
        return statistics.map((value, index) => (
            <div key={`keyStatistics${index}`} className='statisticsBlock'>
                <h5 style={{ height: '2rem', lineHeight: '2rem' }}>{statisticsTexts[index]}</h5>
                <h5 style={{ height: '2rem', lineHeight: '2rem' }}>
                    {value} {statisticsChars[index]}
                </h5>
            </div>
        ));
    }

    return (
        <div id='statisticsSection'>
            <h1>Statistics</h1>
            <div id='statisticsContainer'>{GetStatistics()}</div>
        </div>
    );
}
