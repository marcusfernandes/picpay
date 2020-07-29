import React from 'react';
import { View } from 'react-native';

import { Container, Details, Image, Title, Description } from './styles';

import img13 from '../../images/13.png'


const Banner = () => {
  return(
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parceirias em dia, da uma ajuda neles
        </Description>
      </Details>
      <Image source={img13}/>
    </Container>
  );
}

export default Banner;