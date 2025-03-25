import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'color';
import { useDispatch, useSelector } from 'react-redux';
import breakpoints from '../utils/breakpoints';
import Header from '../components/Header';
import { landingBackgroundImage, landingBackgroundColor } from '../config';
import { createScene } from '../store/sm';
import micFill from '../img/mic-fill.svg';
import videoFill from '../img/camera-video-fill.svg';
import Popup from '../components/popUp/popUp';
import Content from '../components/popUp/content';

function Landing({ className }) {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const {
    connected,
    loading,
    error,
  } = useSelector(({ sm }) => (sm));

  const createSceneIfNotStarted = () => {
    if (loading === false && connected === false && error === null) {
      dispatch(createScene());
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log(showPopup);
  };

  useEffect(() => {
    createSceneIfNotStarted();
  }, []);

  const [skip, setSkip] = useState(false);
  const redirectToVideoOnConnect = () => {
    setSkip(true);
  };
  const history = useHistory();
  useEffect(() => {
    if (skip === true && connected === true) history.push('/video');
  }, [connected, skip]);

  return (
    <div className={className}>
      <div className="landing-wrapper">
        {showPopup && (
          <Popup onClose={togglePopup}>
            <Content />
          </Popup>
        )}
        <Header />
        <div className="container d-flex">
          <div className="landing-container flex-grow-1">
            <div className="col-12 col-lg-6">
              <div className="row" style={{ marginBottom: '9px' }}>
                <div>
                  <h1 className="fw-bol">Sou uma Pessoa Digital Hiper-realista, criada pela Digital Solvers, com o propósito de esclarecer suas dúvidas.</h1>
                </div>
              </div>
              <div className="row">
                <div>
                  <h4 className="fw-light" style={{ marginBottom: '31px' }}>
                    Sou uma especialista em
                    <b> Osteoporose </b>
                    ,
                    faça-me uma pergunta e farei o meu melhor para respondê-la.
                  </h4>
                </div>
              </div>
              <div className="row" style={{ marginBottom: '60px' }}>
                {!connected && (
                  <div
                    className="button-start button--disabled m-2 "
                    type="button"
                  >
                    <span>
                      Aguarde...
                    </span>
                    <img alt="gif loading" src="https://lh3.googleusercontent.com/proxy/9rLje0-3FNznCiW_PB26zLjadDVYYEDc6WyBUIcYBKXfbLZN8VMuPw_lBCo2FRl6ap4JPSUJGCqL8Q6FFb3oNEOY2JGJPKfGq_LdtfcP6nnp3dCWqZwQ27aW8_hbp3Zxcy9_rWFxryXb" className="gif-loading" />
                  </div>
                )}
                {connected && (
                  <button
                    className={`${connected ? 'button-start' : 'button-start button-start--disabled'} m-2`}
                    type="button"
                    disabled={!connected}
                    onClick={redirectToVideoOnConnect}
                  >
                    Converse comigo
                  </button>
                )}
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="termsCheckbox" />
                <p htmlFor="termsCheckbox">
                  <b>Aceitar os </b>
                  <button type="button" onClick={togglePopup}> Termos de Privacidade </button>
                  <b> e </b>
                  <button type="button" onClick={togglePopup}>Contrato de Usuário</button>
                  <b> Final - EULA </b>
                  Permitir acesso à câmera, microfone e
                  <strong className="strongCheckbox"> dados de uso</strong>
                  .
                </p>
              </div>
              <div className="row">
                <div>
                  Acho difícil ouvi-lo quando você está em uma sala barulhenta,
                  ou quando há outras conversas acontecendo ao seu redor,
                  então fale comigo de um lugar tranquilo.
                </div>
              </div>
              <div className="col" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Landing)`
  .fw-bol { font-size: 24px!important;}

  .fw-light{ font-size: 16px; }

  .gif-loading {
    width: 25px;
    height: 25px;
  }

  .fw-bol {
    font-size: 32px;
  }
  
  .landing-wrapper {
    min-height: 100vh;

    background: ${landingBackgroundImage ? `url(${landingBackgroundImage})` : ''} ${landingBackgroundColor ? `${landingBackgroundColor};` : ''};
    background-size: auto 50%;
    background-repeat: no-repeat;
    background-position: bottom center;
    z-index: 2;


    @media (min-width: ${breakpoints.lg}px) {
      background-size: 60% auto;
      background-position: right bottom;
    }
  }

  .button-start {
    border: 1px solid rgb(60, 60, 60);
    border-radius: 32px;
    padding:16px 32px;
    background-color: #701B75;
    color: #ffffff;
    font-weight: 600;
    margin: 0;
  }

  .button--disabled {
    border: 1px solid rgb(60, 60, 60);
    border-radius: 32px;
    padding:16px 32px;
    background-color: #E5E5E5;
    color: #ABABAB;
    font-weight: 600;
    margin: 0;
    text-align: center;
    cursor: not-allowed;

    &>span{
      margin-right: 10px;
    }
  }

  .button-start--disabled {
    background-color: #E5E5E5;
    color: #ABABAB;
  }

  .landing-container {
    padding-top: 1rem;
    display: flex;

    &>div {
      background-color: ${Color(landingBackgroundColor).alpha(0.5)};
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0,0,0,0.1);
      padding: 1rem;
      border-radius: 5px;

      @media (min-width: ${breakpoints.lg}px) {
        border: none;
      }
    }
  }
  .form-switch .form-check-input {
    min-width: 7rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #8AC43F;
    color: #ffffff;


    &.mic-switch::before, &.mic-switch.status-checked::after {
        background-image: url(${micFill});
    }
    &.video-switch::before, &.video-switch.status-checked::after {
        background-image: url(${videoFill});
    }
    &.mic-switch.status-checked::before, &.video-switch.status-checked::before {
      background-image: none;
    }

    &.status-unchecked {
      background-color: #E5E5E5;
      color: #ABABAB;
      &::after {
        content: 'OFF';
        color: #000;
        margin-right: 18%;
      }
      &::before {
        background-size: 60%;
        background-repeat: no-repeat;
        background-color: rgb(220, 220, 220);
        background-position: 45% center;
        content: '';
        display: block;

        border-radius: 50%;

        height: 80%;
        margin-left: 5%;
        aspect-ratio: 1;
        float: right;
      }
    }

    &.status-checked {
      &::before {
        content: 'ON';
        color: #FFF;
        margin-left: 22%;
      }

      &::after {
        background-size: 60%;
        background-repeat: no-repeat;
        background-color: #FFF;
        background-position: 55% center;
        content: '';
        display: block;

        border-radius: 50%;

        height: 80%;
        margin-right: 5%;
        aspect-ratio: 1;
        float: right;
      }
    }

    .checkbox-container{
      display: flex;
    }
  }

 /* CSS para estilizar o checkbox */
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
  margin-bottom: 30px;
}

.checkbox-container input[type="checkbox"] {
  appearance: none; 
  width: 35px; 
  height: 25px;
  border: 3px solid #701B75; /* Azul escuro */
  border-radius: 5px; 
  background: transparent; 
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.checkbox-container input[type="checkbox"]:hover {
  border-color: #E594BC; /* Azul mais claro ao passar o mouse */
}

.checkbox-container input[type="checkbox"]:checked {
  background: linear-gradient(to bottom, #701B75, #E594BC); /* Gradiente azul */
  border-color: #701B75; /* Azul mais claro */
}

.checkbox-container input[type="checkbox"]:checked::before {
  content: "✔"; /* Marca de seleção */
  font-size: 12px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.checkbox-container p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #000; /* Branco para o texto */
}

.checkbox-container b {
  font-weight: normal;
}

.checkbox-container button {
  background: none;
  border: none;
  color: #701B75;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.checkbox-container button:hover {
  text-decoration: none; /* Retira o sublinhado ao passar o mouse */
}

.checkbox-container .strongCheckbox {
  font-weight: bold;
  color: #701B75; 
}
`;
