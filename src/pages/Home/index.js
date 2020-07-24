import React from 'react';
import { View, StatusBar } from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Sugestions from '../../components/Sugestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'



const Home = () => {
  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={25} color="#10c86e"/>
        
          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={25} color="#10c86e"/>
        </Header>
        <Sugestions />
        <Activities/>
        <Tips/>
        <Banner/>
      </Container>
    </Wrapper>
  );
}

export default Home;