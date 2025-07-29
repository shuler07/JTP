import './WheelLastGames.css';
import { ATTR_BY_COLOR_VALUES } from '../data';

export default function WheelLastGames({ wheelLastGamesArray }) {
    function GetLastGames() {
        if (wheelLastGamesArray.length == 0) {
            return (
                <h6
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100px',
                        textAlign: 'center',
                        lineHeight: '100px',
                        color: 'gray',
                    }}
                >
                    Spin wheel to see your last games
                </h6>
            );
        }
        return wheelLastGamesArray.map((game, index) => (
            <div
                key={index}
                className='wheelLastGameCard'
                style={{ background: `#${game.bgColor}` }}
            >
                <div className='wheelLastGameCardInfoContainer'>
                    <h6
                        style={{
                            width: '100%',
                            height: '40px',
                            textAlign: 'center',
                            lineHeight: '40px',
                        }}
                    >
                        {game.betBefore} $
                    </h6>
                    <div
                        className='wheelLastGameCardColorInfo'
                        style={{ background: `#${ATTR_BY_COLOR_VALUES[game.userColor]}` }}
                    ></div>
                </div>
                <img
                    className='wheelLastGameCardInfoContainer'
                    src='shared-assets/images/ArrowSign.png'
                    style={{ height: '40px' }}
                />
                <div className='wheelLastGameCardInfoContainer'>
                    <h5
                        style={{
                            width: '100%',
                            height: '40px',
                            textAlign: 'center',
                            lineHeight: '40px',
                        }}
                    >
                        {game.betAfter} $
                    </h5>
                    <div
                        className='wheelLastGameCardColorInfo'
                        style={{ background: `#${ATTR_BY_COLOR_VALUES[game.finalColor]}` }}
                    ></div>
                </div>
            </div>
        ));
    }

    return (
        <section id='wheelLastGamesSection'>
            <h1>Last games</h1>
            <div id='wheelLastGamesContainer'>{GetLastGames()}</div>
        </section>
    );
}
