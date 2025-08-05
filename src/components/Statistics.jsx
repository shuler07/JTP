import './Statistics.css';

export default function Statistics({ statistics, statisticsTexts, statisticsChars }) {
    function GetStatistics() {
        const values = Object.values(statistics);
        if (values.length == 0) {
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
        return values.map((value, index) => (
            <div key={`keyStatistics${index}`} className='statisticsBlock'>
                <h5>{statisticsTexts[index]}</h5>
                <h5>
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
