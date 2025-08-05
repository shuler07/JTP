import './GameCard.css';

import { Link } from 'react-router-dom';

import { GAME_CARDS_DATA } from '../../data';

export default function GameCard({ game }) {
    const data = GAME_CARDS_DATA[game];

    return (
        <div id={data.id} className='gameCard' style={{ background: data.background }}>
            <h2 className='gameCardTitle'>{game}</h2>
            <img id={data.imageId} className='gameCardImage' src={data.image} />
            <div className='gameCardBlur' style={{ background: data.blurBackground }}></div>
            <Link to={data.navigateTo} style={{ position: 'absolute', top: '0', width: '100%', height: '100%' }}></Link>
        </div>
    );
}
