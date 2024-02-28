
import { Box, Text , ScrollView} from 'native-base';
import { Image } from 'react-native'
import { styles } from './estilos/Temas';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import React, { useState } from 'react';
import { CheckBox } from './components/Checkbox';
import { Secoes } from './utils/CadastroEntradatexto';

//Por que com Native base a image nao funciona
const LogoImage = require('./assets/Logo.png')
//import { Logo } from './assets/Logo.png'
export default function Cadastro({navigation}) {
  const [numSecao, setNumSecao] = useState<number>(1)
  function avancarSesao(){
    if(numSecao < Secoes.length - 1){setNumSecao((prevnumSecao) => prevnumSecao + 1)}
  }
  function voltarSesao(){
    if(numSecao > 0){setNumSecao((prevnumSecao) => prevnumSecao - 1)}
  }
 
  return (
    <ScrollView flex={1} p={5} >
      <Image source={LogoImage} alt="Logo Voll" style={styles.Logo} />
      <Titulo mt={10}>{Secoes[numSecao].Titulo}</Titulo>
      <Box mt="10px">
        {
          Secoes[numSecao]?.EntradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.Label} placeholder={entrada.Placeholder} key={entrada.id} />
          })
        }
        {
          numSecao == 3 && <Text mt="2" mb={4} fontSize="md" fontWeight="bold" color="blue.800">Selecione os planos:</Text>
        }
        {
          Secoes[numSecao]?.Checkbox?.map(checkbox => {
            return <CheckBox  value={''}  key={checkbox.id} >{checkbox.value} </CheckBox>
          })
        }
        {numSecao > 1 && <Botao onPress= {()=> voltarSesao()} color='gray.500' >Voltar</Botao>}
        {numSecao == 1 && <Botao onPress={() => navigation.navigate('login')} color='gray.500' >Voltar</Botao>}
        <Botao mb={4} onPress= {()=> avancarSesao()}>Avançar</Botao>
      </Box>
    </ScrollView>
  );
}


