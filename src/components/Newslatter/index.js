import React from 'react';

import { NewslatterWrapper } from './style';

function Newslatter() {
  return (
    <NewslatterWrapper id="newslatter" className="row">
    <div className="row form-container d-flex align-itens-md-center justify-content-md-center align-itens-sm-center justify-content-sm-center">
      <form>
        <div className="form-row">
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="Sobrenome"/>
        </div>
        <input type="text" placeholder="Digite seu e-mail preferido" />
        <input type="text" placeholder="Confirme seu e-mail preferido" />
        <div className="form-row">
          <input type="text" placeholder="Insira seu número de telefone"/>
          <button>ENVIAR</button>
        </div>
      </form>
      <div className="about-newslatter">
        <h1>
        Deixe suas informações para participar da nossa <strong>newslatter</strong>.
        </h1>
        <p>Seus dados não serão compartilhados 
          com terceiras, são apenas 
          para podermos enviar as 
          melhores notícias diretamente para seu e-mail</p>
      </div>
    </div>
  </NewslatterWrapper>
  );
}

export default Newslatter;