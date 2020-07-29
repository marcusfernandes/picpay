import React, {useState} from 'react';
import { Switch } from 'react-native';
import {Feather, MaterialCommunityIcons, FontAwesome, AntDesign} from '@expo/vector-icons'


import { 
    Wrapper,
    Header, 
    HeaderContainer, 
    Title,
    BalanceContainer,
    Value,
    Bold, 
    EyeButton,
    Info, 
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle, 
    Card,
    CardBody,
    CardDetails,
    Cardtitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTickeLabel
} from './styles';

import creditCard from '../../images/credit-card.png'


const Wallet = () => {

  const [isVisable, setIsVisable] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisable((prevState) => !prevState)
  }

  const handleToggleUseBalance = () => {
    setUseBalance((prevState) => !prevState)
  }

  return(
    <Wrapper>   
      <Header useBalance={useBalance}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisable ? '25,00' : '----'}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisable ? 'eye' : 'eye-off'} size={28} color="#FFF"/>
            </EyeButton>
          </BalanceContainer>  

          <Info>
            Seu saldo está rendendo 100% de CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={26} color="#FFF"/>
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#FFF"/>
              <ActionLabel>Banco</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>
          Usar saldo ao pagar
        </UseBalanceTitle>
        <Switch
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de pagamento
        </PaymentMethodsTitle>
      </PaymentMethods>


      <Card>
        
        <CardBody>
          <CardDetails>
            <Cardtitle>
              Cadastre seu cartão
            </Cardtitle>
            <CardInfo>
              Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo na sua conta
            </CardInfo>
          </CardDetails>
          <Img source={creditCard} resizeMode="contain"/>
        </CardBody>

        <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0db060"/>
          <AddLabel>Adicionar Cartão de credito</AddLabel>
        </AddButton>

      </Card>

      <UseTicketButton>
        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060"/>
        <UseTickeLabel>Usar código promocional</UseTickeLabel>
      </UseTicketButton>

    </Wrapper>
  );
}

export default Wallet;