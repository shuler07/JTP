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
                    It seems here is nothing...
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
                            height: '2.5rem',
                            textAlign: 'center',
                            lineHeight: '2.5rem',
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
                    src='/JTP/shared-assets/images/ArrowRight.svg'
                    style={{ width: '32px', padding: '4px' }}
                />
                <div>
                    <h5
                        style={{
                            width: '100%',
                            height: '2.5rem',
                            textAlign: 'center',
                            lineHeight: '2.5rem',
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
