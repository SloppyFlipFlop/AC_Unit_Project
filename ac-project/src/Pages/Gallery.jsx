import React, {useState} from 'react';

import lemons from "../utils/images/lemons.jpg";
import stairs from '../utils/images/stairs.jpg';
import succulents from '../utils/images/succulents.jpg';
import leaf from '../utils/images/leaf.jpg';
import leaves1 from '../utils/images/leaves1.jpg';
import leaves2 from '../utils/images/leaves2.jpg';

const Gallery = () => {
    const [button1Show, setButton1Show] = useState(true);
    const [button2Show, setButton2Show] = useState(true);
    let showHide = (id) => {
        if(id === "button1"){
            setButton1Show(true);
            setButton2Show(false);
        }
        if(id === "button2"){
            setButton2Show(true);
            setButton1Show(false);
        }
        if(id === "all"){
           setButton1Show(true);
           setButton2Show(true);
        }
        if(id === "none"){
            setButton1Show(false);
           setButton2Show(false);
        }
    }
    return (
        <div id="gallery">
            <h3>Gallery</h3>
            <div className="buttons">
                <button className="btn" id="button-all" onClick={() => showHide("all")}>All</button>
                <button className="btn" id="button1" onClick={() => showHide("button1")}>Button 1</button>
                <button className="btn" id="button2" onClick={() => showHide("button2")}>Button 2</button>
                <button className="btn" id="button-none" onClick={() => showHide("none")}>None</button>
            </div>
            <div className="images">
                {button1Show && <img src={lemons} alt="lemons" />}
                {button1Show && <img src={stairs} alt="stairs" />}
                {button1Show && <img src={succulents} alt="succulents" />}
                {button2Show && <img src={leaf} alt="leaf" />}
                {button2Show && <img src={leaves1} alt="leaves1" />}
                {button2Show && <img src={leaves2} alt="leaves2" />}
            </div>
        </div>
    )
}

export default Gallery
