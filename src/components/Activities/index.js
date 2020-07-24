import React from 'react';
import { View } from 'react-native';
import {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

import { 
    Container, 
    Header, 
    Title,
    Card,
    CardHeader,
    Avatar, 
    Description, 
    Bold,
    CardBody, 
    Unsername,
    CardFooter,
    Details,
    Value,
    Divider,
    Date, 
    Actions,
    Option,
    OptionLabel
  } from './styles';

import avatar from '../../images/avatar.png'

const Activities = () => {
  return(
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@cugostoso</Bold>
          </Description>
        </CardHeader>


        <CardBody>
          <Unsername>Pinto Pequeno</Unsername>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider/>
            <Feather name="lock" color="#FFF" size={13}/>
            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" color="#FFF" size={13}/>
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" color="#FFF" size={13}/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
          
        </CardFooter>

      </Card>

    </Container>
  )
}

export default Activities;