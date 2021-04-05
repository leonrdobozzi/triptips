import React from 'react';

import { ContainerCall, Title } from './style';


function CallHeader({title, subtitle, size, bg}) {
  return (
        <ContainerCall bg={bg}>
            <div>
                <Title textSize={size}>{title}</Title>
                <p>{subtitle}</p>
            </div>
        </ContainerCall>
    );
}

export default CallHeader;
