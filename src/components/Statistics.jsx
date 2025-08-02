import './Statistics.css';

export default function Statistics({ statistics, statisticsTexts, statisticsChars }) {
    function GetStatistics() {
        return Object.values(statistics).map((value, index) => (
            <div key={`keyStatistics${index}`} className='statisticsBlock'>
                <h5>{statisticsTexts[index]}</h5>
                <h5>{value} {statisticsChars[index]}</h5>
            </div>
        ));
    }

    return (
        <div id='statisticsSection'>
            <h1>Statistics</h1>
            <div id='statisticsContainer'>
                {GetStatistics()}
            </div>
        </div>
    );
};