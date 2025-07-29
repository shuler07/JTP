import './WheelStatistics.css';
import { WHEEL_STATISTICS_TEXTS, WHEEL_STATISTICS_CHARS } from '../data';

export default function WheelStatistics({ wheelStatistics }) {
    function GetStatistics() {
        return Object.values(wheelStatistics).map((value, index) => (
            <div key={`statistics${index}`} className='wheelStatisticsBlock'>
                <h5>{WHEEL_STATISTICS_TEXTS[index]}</h5>
                <h5>{value} {WHEEL_STATISTICS_CHARS[index]}</h5>
            </div>
        ));
    }

    return (
        <div id='wheelStatisticsSection'>
            <h1>Statistics</h1>
            <div id='wheelStatisticsContainer'>
                {GetStatistics()}
            </div>
        </div>
    );
};