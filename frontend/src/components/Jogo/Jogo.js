
import "./Jogo.css";
import clouds from  "../../assets/clouds.png";
import mario from  "../../assets/mario.gif";
import gameOver from  "../../assets/game-over.png";
import pipe from  "../../assets/pipe.png";
import { useEffect, useRef, useState } from 'react';


function Jogo(props) {

    // console.log('Componente Jogo sendo renderizado');

    const [estaPulando, setEstaPulando] = useState(false);
    const [estaMorto, setEstaMorto] = useState(false);
    const [pontos, setPontos] = useState(0);

    const marioRef = useRef();
    const pipeRef = useRef();

    function marioEstaNoCano() {
        const mario = marioRef.current;
        const pipe = pipeRef.current;

        if (!mario || !pipe){
            return;
        }    

        return(
            pipe.offsetLeft > mario.offsetLeft &&
            pipe.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
            mario.offsetTop + mario.offsetHeight > pipe.offsetTop  
        );
    };

        // Implementação temporária para exibir se o mário está no cano
  // ou não
  setInterval(function () {
    // const valor = marioEstaNoCano();
    const estaNoCano = marioEstaNoCano();

    if(!estaNoCano){
        return;
    }

    // console.log("Mário está no cano?", valor);
    setEstaMorto(true);
    props.onMorrer();
  }, 100);
//   console.log({estaMorto});

  useEffect(function () {

   const interval = setInterval(function () {
        if (estaMorto) {
            return;
        }
        setPontos(pontos + 1);

        console.log({pontos});

    }, 500);
    return() => clearInterval(interval);
  }, [estaMorto, pontos]
  
  );

  
    
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

    const marioImage = estaMorto ? gameOver : mario;

    const pararAnimacao = estaMorto ? "parar-animacao" : "";

    return (
        <div className="jogo">
            <div>Pntos: {pontos}</div>
            <img className="nuvens" src={clouds} alt="Nuvens" />
            <img ref={marioRef} className={marioClassName} src={marioImage} alt="Mario" />
            <img ref={pipeRef} className={"pipe " + pararAnimacao} src={pipe} alt="Pipe" />
            <div className="ground"></div>
        </div>
    );
}

export default Jogo;
