
import "./Jogo.css";
import clouds from  "../../assets/clouds.png";
import mario from  "../../assets/mario.gif";
import pipe from  "../../assets/pipe.png";
import { useState } from 'react';


function Jogo() {
    const [estaPulando, setEstaPulando] = useState(false);
    document.onkeydown = function (){
        setEstaPulando(true);
        setTimeout(function () {
            setEstaPulando(false);
        }, 700)
    };

    let marioClassName = "mario";
    
    if (estaPulando) {
        marioClassName = "mario mario-pulo";
    }

    console.log({estaPulando});

    return (
        <div className="jogo">
            <img className="nuvens" src={clouds} alt="Nuvens" />
            <img className={marioClassName} src={mario} alt="Mario" />
            <img className="pipe" src={pipe} alt="pipe" />
            <div className="ground"></div>
        </div>
    );
}

export default Jogo;
