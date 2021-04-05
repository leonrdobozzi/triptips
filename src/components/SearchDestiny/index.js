import React from 'react';

import { Find } from './style';

function SearchDestiny() {
  return (
    <Find id={"findDestiny"} className="row">
    <h3 className="col-lg-3 col-md-12 col-sm-12">Ache seu próximo <strong>destino</strong></h3>
    <div className="form-input-find-destiny col-lg-3 col-md-12 col-sm-12">
      <input type="text" placeholder="Para onde você vai?"/>
      <button>BUSCAR</button>  
    </div>
  </Find>
  );
}

export default SearchDestiny;