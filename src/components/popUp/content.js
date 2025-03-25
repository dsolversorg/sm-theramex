import React, { useState } from 'react';

function Accordion() {
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="accordion">
      <h1 className="title">Primeiro o mais importante</h1>
      <h2 className="subTitle">Para melhor experiência, gostaria de vê-lo e ouvi-lo.</h2>
      <p className="paragrafo">
        Isso será como uma videochamada onde podemos conversar cara a cara. Se isso parecer ok,
        ative o acesso ao seu microfone e câmera quando solicitarmos.
      </p>
      <p className="paragrafo">
        A velocidade da sua conexão de internet pode ter um grande
        impacto na qualidade da imagem na chamada.
        Se você tiver uma qualidade ruim,
        adoraríamos que você pudesse executar um teste de velocidade
        e nos informar os resultados em seu feedback quando encerrar a sessão.
      </p>
      <p className="paragrafo">
        Posso ter dificuldade em ouvi-lo quando você está em uma sala barulhenta ou quando há
        outras conversas acontecendo ao seu redor. Ligue para mim de um lugar silencioso
        e vamos manter isso um a um por enquanto.
      </p>
      <p className="paragrafo">
        Faça uma pergunta e farei o meu melhor para respondê-la.
        Se eu não tiver uma resposta para você,
        farei o meu melhor para fornecer a você um próximo passo razoável.
      </p>
      <div className="accordion-item">
        <div
          className="accordion-header"
          role="button"
          tabIndex={0}
          onClick={() => toggleAccordion('section1')}
          onKeyDown={(e) => e.key === 'Enter' && toggleAccordion('section1')}
        >
          <h3 className="h3Title">QUEM ESTÁ EXECUTANDO ESTE SISTEMA?</h3>
          <button className="accordion-toggle-button" type="button">
            {openSection === 'section1' ? '-' : '+'}
          </button>
        </div>
        {openSection === 'section1' && (
          <div className="accordion-content">
            <p className="paragrafo">
              A
              <a className="dsstro" href="https://www.digitalsolvers.com/" target="_blank" rel="noopener noreferrer"> Digital Solvers </a>
              é
              uma empresa Brasileira cujo
              endereço é Rua Henri
              Dunant, 873 Cj
              2102, São Paulo / SP,
              CEP 05716-090
            </p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          role="button"
          tabIndex={0}
          onClick={() => toggleAccordion('section2')}
          onKeyDown={(e) => e.key === 'Enter' && toggleAccordion('section2')}
        >
          <h3 className="h3Title">QUAIS INFORMAÇÕES ESTAMOS COLETANDO?</h3>
          <button className="accordion-toggle-button" type="button">
            {openSection === 'section2' ? '-' : '+'}
          </button>
        </div>
        {openSection === 'section2' && (
          <div className="accordion-content">
            <p className="paragrafo">Para que a Pessoa Digital possa interagir com você de forma autêntica e humana, seu Cérebro Digital precisa coletar e processar informações sobre suas expressões. Assim que são coletadas, essas informações são anonimizadas. Não guardamos essas informações, não as fornecemos a terceiros nem as compartilhamos. Elas são usadas puramente enquanto você interage com a Pessoa Digital para gerar a melhor experiência possível.</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          role="button"
          tabIndex={0}
          onClick={() => toggleAccordion('section3')}
          onKeyDown={(e) => e.key === 'Enter' && toggleAccordion('section3')}
        >
          <h3 className="h3Title">POR QUE ESTAMOS COLETANDO ESSAS INFORMAÇÕES?</h3>
          <button className="accordion-toggle-button" type="button">
            {openSection === 'section3' ? '-' : '+'}
          </button>
        </div>
        {openSection === 'section3' && (
          <div className="accordion-content">
            <p className="paragrafo">Queremos que sua experiência com a Pessoa Digital seja a mais divertida, natural e envolvente possível. Você pode nos ajudar a fazer isso permitindo que a Pessoa Digital estude e responda às suas expressões para interpretar sua resposta emocional para que ela possa fornecer uma resposta apropriada. É como uma conversa com uma pessoa real, onde ela não está apenas interpretando o que você diz, mas como você diz. No processo, você está ajudando a avançar a tecnologia e experimentando o futuro da interação entre humanos e máquinas. Todos os dados de conversa coletados são anonimizados e estão em conformidade com as práticas e regulamentações de privacidade atuais. Levamos sua privacidade muito a sério.</p>
          </div>
        )}
      </div>
      <div className="content-text">
        <p className="paragrafo-privacity">
          Se você quiser saber mais informações e como coletamos e usamos suas informações,
          consulte nossa
          <a className="dsstro" href="https://digitalsolvers.com/privacidade/" target="_blank" rel="noopener noreferrer"> Política de Privacidade aqui.</a>
        </p>
      </div>

      {/* <div className="accordion-item">
        <div
          className="accordion-header"
          role="button"
          tabIndex={0}
          onClick={() => toggleAccordion('section4')}
          onKeyDown={(e) => e.key === 'Enter' && toggleAccordion('section4')}
        >
          <h2>NOSSA POLÍTICA DE PRIVACIDADE</h2>
          <button className="accordion-toggle-button" type="button">
            {openSection === 'section4' ? '-' : '+'}
          </button>
        </div>
        {openSection === 'section4' && (
          <div className="accordion-content">
            <p>conteudo</p>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Accordion;

// Estilo em CSS (adicione ao final do mesmo arquivo se usar CSS-in-JS ou em um arquivo separado):
const styles = `
.accordion {
  width: 100%;
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
}

.accordion-item {
  display: flex;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
}

.accordion-header {
  display: flex;
  cursor: pointer;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}

.accordion-header:hover {
  background-color: #eaeaea;
}

.accordion-toggle-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.accordion-content {
 display: flex;
  padding-top: 15px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  animation: slideDown 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  width: 90%;
}

.title {
  font-size: 2.0rem;
  text-align: center;
  margin-bottom: 40px;
  color: #8BC53F; 
}

.subTitle {
  font-size: 1.3rem;
  margin-top: 30px;
  color: #6a9c28; 
}

.h3Title {
  font-size: 1rem;
  margin: 0;
  color: #6a9c28;
}

.dsstro {
  color: #6a9c28; 
  font-weight: normal;
  text-decoration: none
}

.paragrafo {
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: justify;
  color: #555; 
}

ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
