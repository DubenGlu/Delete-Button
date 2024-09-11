import { useState, useEffect } from 'react';
import './App.css';
import { LuInstagram } from "react-icons/lu";
import ImgRuben from './assets/imagenRuben.png';

function App() {
  const [animation, setAnimation] = useState(false);
  const [animationsFinished, setAnimationsFinished] = useState(false);

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => {
        setAnimationsFinished(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [animation]);

  useEffect(() => {
    if (animationsFinished) {
      const timer = setTimeout(() => {
        setAnimationsFinished(false);
        setAnimation(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [animationsFinished]);

  const handleClickInsta = () => {
    window.open('https://www.instagram.com/reuven.elgluteos/', '_blank');
  }

  return (
    <>
      <button
        className={`${animation ? 'buttonAnimation' : 'button'} ${animationsFinished ? 'buttonFinal' : ''}`}
        onClick={() => setAnimation(true)}
      >
        {
          animationsFinished && (
            <div className='eliminadoText'>
              Eliminado!
            </div>
          )
        }
        {animation && (
          <div className={`Inicio ${animationsFinished ? 'inicioFinal' : ''}`}>
            <div className="lineInicio"></div>
            <div className="lineInicio1"></div>
            <div className="lineInicio"></div>
            <div className="lineInicio1"></div>
          </div>
        )}
        <div className={`trash-icon ${animation && 'trashAnimation'} ${animationsFinished ? 'trashAnimationFinished' : ''}`}>
          <div className={`lid ${animation && 'lidAbrir'} ${animationsFinished ? 'lidFinished' : ''}`}>
            <div className="semicircle"></div>
          </div>
          <div className={`bin ${animation && 'binAnimation'} ${animationsFinished ? 'binAnimationFinished' : ''}`}>
            <div className={`line ${animation && 'pAnimado'}`}></div>
            <div className={`line ${animation && 'pAnimado'}`}></div>
            <div className={`line ${animation && 'pAnimado'}`}></div>
            <div className={`desarrollo ${animation && 'desarrolloAnimation'}`}>
              <div className={`lineDesarrollo ${animation && 'DesarrolloAnimation'}`}></div>
              <div className={`lineDesarrollo ${animation && 'DesarrolloAnimation'}`}></div>
              <div className={`lineDesarrollo ${animation && 'DesarrolloAnimation'}`}></div>
              <div className={`lineDesarrollo ${animation && 'DesarrolloAnimation'}`}></div>
            </div>
          </div>
        </div>
        {animation && (
          <div className="Final">
            <div className={`circleFinal ${animation && 'circleAnimation'} ${animationsFinished ? 'circleAnimationFinished' : ''}`}>
              <div className={`paloma `}>
                <div className="paloma1"></div>
                <div className="paloma2"></div>
              </div>
            </div>
          </div>
        )}
        <p className={animation ? 'pAnimado' : ''}>Delete Item</p>
      </button>
      <div className='divCreditos' onClick={handleClickInsta}>
        <img src={ImgRuben} className='imagen' />
        <p className='credits'>By <LuInstagram size={17}/>reuven.elgluteos</p>
      </div>
    </>
  );
}

export default App;
