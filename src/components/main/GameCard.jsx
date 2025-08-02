import './GameCard.css';

import { GAME_CARDS_DATA } from '../../data';

export default function GameCard({ game }) {
    const data = GAME_CARDS_DATA[game];

    return (
        <button
            id={data.id}
            className="gameCard"
            style={{ background: data.background }}
            onClick={() => {
                window.location.href = data.navigateTo;
            }}
        >
            <h2 className="gameCardTitle">{game}</h2>
            <img id={data.imageId} className="gameCardImage" src={data.image} />
            <div className="gameCardBlur" style={{ background: data.blurBackground }}></div>
        </button>
    );
}
