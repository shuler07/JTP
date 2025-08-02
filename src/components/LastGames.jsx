import './LastGames.css';
import { ATTR_BY_COLOR_VALUES } from '../data';

export default function LastGames({ lastGamesArray }) {
    function GetLastGames() {
        if (lastGamesArray.length == 0) {
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
                    It seems there is nothing...
                </h6>
            );
        }
        return lastGamesArray.map((game, index) => (
            <div
                key={`keyLastGame${index}`}
                className='lastGameCard'
                style={{ background: `#${game.bgColor}` }}
            >
                <div>
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
                        className='lastGameCardColorInfo'
                        style={{ background: `#${ATTR_BY_COLOR_VALUES[game.userColor]}` }}
                    ></div>
                </div>
                <img
                    src='./shared-assets/images/ArrowSign.png'
                    style={{ height: '40px' }}
                />
                <div>
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
                        className='lastGameCardColorInfo'
                        style={{ background: `#${ATTR_BY_COLOR_VALUES[game.finalColor]}` }}
                    ></div>
                </div>
            </div>
        ));
    }

    return (
        <section id='lastGamesSection'>
            <h1>Last games</h1>
            <div id='lastGamesContainer'>{GetLastGames()}</div>
        </section>
    );
}
