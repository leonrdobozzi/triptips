import React from 'react';
import {  DestinyWeek } from './styles/style';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CallHeader from '../components/CallHeader';
import Newslatter from '../components/Newslatter';
import SearchDestiny from '../components/SearchDestiny'
import MoreSearch from '../components/MoreSearch';


function Home() {
  return (
    <>
      <Header />
      <CallHeader 
        title={["QUAL A SUA PRÓXIMA", <strong> TRIP</strong>,"?"]}
        subtitle='Aqui você encontra os melhores destinos vivenciados pelos melhores turistas!'
      />
      <SearchDestiny />
      <MoreSearch />
      
      <DestinyWeek className="row">
        <div>
          <h1>DESTINO DA <strong>SEMANA</strong></h1>
          <h3>Santorini, Grécia</h3>
          <p>Santorini, chamada oficialmente Tira e Tera na Antiguidade, é uma ilha no sul do mar Egeu, a cerca de 200 quilômetros a sudeste da Grécia continental. É a maior ilha de um pequeno arquipélago circular que leva o mesmo nome e é o resto de uma caldeira vulcânica...</p>
          <a href="/destiny"><button>SAIBA MAIS</button></a>
        </div>
      </DestinyWeek>
      
      <Newslatter />
      <Footer/>
    </>
  );
}

export default Home;