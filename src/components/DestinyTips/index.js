import React from 'react';

import {Image, Container} from './style';


function DestinyTips({destiny, subtitle, title, description}) {
  return (
        <Container className="row">
            <section className="destiny-tips col-lg-6 col-md-12 col-sm-12">
                    <Image src={destiny}/>
            </section>
            <section className="destiny-description col-lg-6 col-md-12 col-sm-12">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{description}</p>
            </section>
        </Container>
  );
}

export default DestinyTips;