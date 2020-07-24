import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'

export const Button = styled(LinearGradient).attrs(({focused}) => ({
  colors: focused ? ['#FFF', "#CCC"] : ['#00fc6c', "#00ac4a"],
  start:[1,0.2]
}))`
  width:60px;
  height:60px;
  border-radius:30px;
  align-items:center;
  justify-content:center; 
`;

export const Label = styled.Text`
  font-size:12px;
  color:${({focused}) => focused ? '#000' : '#FFF'};
`;