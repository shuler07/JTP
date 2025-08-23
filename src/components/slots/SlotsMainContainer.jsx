import './SlotsMainContainer.css';

import { FIGURE_BY_VALUE } from '../../data';

const IMAGES_ARRAY = Object.values(FIGURE_BY_VALUE);

export default function SlotsMainContainer({ slots, slotsElems }) {
    return (
        <div id='slotsSubContainer'>
            <div id='slotsMainContainer'>
                <SlotSection main={IMAGES_ARRAY[slots[0]]} side={IMAGES_ARRAY[(slots[0] + 1) % 5]} reference={slotsElems[0]} />
                <SlotSection main={IMAGES_ARRAY[slots[1]]} side={IMAGES_ARRAY[(slots[1] + 1) % 5]} reference={slotsElems[1]} />
                <SlotSection main={IMAGES_ARRAY[slots[2]]} side={IMAGES_ARRAY[(slots[2] + 1) % 5]} reference={slotsElems[2]} />
            </div>
        </div>
    );
}

function SlotSection({ main, side, reference }) {
    return (
        <div ref={reference} className='slotSection'>
            <img className='mainSlotItem' src={main}></img>
            <img className='sideSlotItem' src={side}></img>
        </div>
    )
}