import React from 'react';

import { Search } from './style';

function MoreSearch() {
  return (
    <Search id={'moreSearch'} className="row">
    <div className="col-lg-6 col-md-12 col-sm-12 more-search-image">
      <h1>Buzios</h1>
      <p>Rio de Janeiro, Brasil</p>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 more-search-content">
      <h1>
        MAIS PROCURADOS
      </h1>
      <p>
        Aqui você encontra os locais mais procurados, uma breve foto do destino, seu estado e seu país, o botão abaixo te leva para uma página com mais informações dos locais
      </p>
      <a href="/destiny"><button>VER MAIS DETALHES</button></a>
    </div>
  </Search>
  )
}

export default MoreSearch;