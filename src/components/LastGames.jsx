import './LastGames.css';
import { COLOR_BY_VALUE, FIGURE_BY_VALUE } from '../data';

export default function LastGames({ lastGames }) {
    function GetLastGames() {
        const textEmpty = () => (
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

        if (lastGames.length == 0) return textEmpty();

        const type = Object.hasOwn(lastGames[0], 'userColor') ? 'color' : 'figure';
        const textStyling = { width: '100%', height: '2.5rem', textAlign: 'center', lineHeight: '2.5rem' };

        function GetColorInfo(color) {
            return <div className='lastGameCardColorInfo' style={{ background: `#${COLOR_BY_VALUE[color]}` }}></div>;
        }

        return lastGames.map((game, index) => (
            <div key={`keyLastGame${index}`} className='lastGameCard' style={{ background: `#${game.bgColor}` }}>
                <div>
                    <h6 style={textStyling}>{game.betBefore} $</h6>
                    <div style={{ padding: '0px 0.5rem' }}>
                        {type === 'color' && GetColorInfo(game.userColor)}
                        {type === 'figure' && <img className='lastGameCardFigureInfo' src={FIGURE_BY_VALUE[game.userFigure]}></img>}
                    </div>
                </div>
                <img src='/JTP/shared-assets/images/ArrowRight.svg' style={{ width: '2rem', padding: '0.25rem' }} />
                <div>
                    <h5 style={textStyling}>{game.betAfter} $</h5>
                    <div style={{ padding: '0px 0.5rem', display: 'flex', gap: '0.5rem' }}>
                        {type === 'color' && GetColorInfo(game.finalColor)}
                        {type === 'figure' &&
                            game.finalFigures.map((value, _index) => (
                                <img
                                    key={`keyLastGame${index}Info${_index}`}
                                    className='lastGameCardFigureInfo'
                                    src={FIGURE_BY_VALUE[value]}
                                ></img>
                            ))}
                    </div>
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
