import React from 'react';
import {MaterialIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

const PayButton = ({onPress, focused}) => {
  return (
  <TouchableWithoutFeedback onPress={onPress}>
    <Button focused={focused}>
      <MaterialIcons 
        name="attach-money"
        size={30}
        color={focused ? '#000' : '#FFF'}/>
      <Label focused={focused}>Pagar</Label>
    </Button>
  </TouchableWithoutFeedback>    
  )
}

export default PayButton;