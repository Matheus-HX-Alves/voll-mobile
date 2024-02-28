
import { VStack, Text, Box, Button, Link } from 'native-base';
import { TouchableOpacity, Image } from 'react-native'
import { styles } from './estilos/Temas';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Secoes } from './utils/CadastroEntradatexto';
import { useState } from 'react';
import { Botao } from './components/Botao';

//Por que com Native base a image nao funciona
const LogoImage = require('./assets/Logo.png')

//import { Logo } from './assets/Logo.png'

export default function Login({navigation}) {
  
  const [numSecao, setNumSecao] = useState<number>(0)
  function avancarSesao(){
    if(numSecao < Secoes.length - 1){setNumSecao((prevnumSecao) => prevnumSecao + 1)}
  }
  function voltarSesao(){
    if(numSecao > 0){setNumSecao((prevnumSecao) => prevnumSecao - 1)}
  }
  return (
    <VStack flex={1} alignItems="Center" justifyContent="center" p={5}>
      <Image source={LogoImage} alt="Logo Voll" style={styles.Logo} />
      <Titulo mt="50px">
        Faça login em sua conta
      </Titulo>
      <Box mt="10px">
        <EntradaTexto label="Email" placeholder="Insira seu endereço de email" />
        <EntradaTexto label="Senha" placeholder="Insira sua senha" />
        <Botao onPress={() => navigation.navigate('tabs')}>
          Entrar
        </Botao>
        <Link fontSize="md" color="blue.800" alignSelf="center" href="#" mt={4}>
          Esqueceu sua senha?
        </Link>
        <Box width="100%" flexDirection="row" justifyContent="center" mt={8}>
          <Text fontSize="md" mr={2}>
            Ainda não tem conta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
            <Text color="blue.500" fontSize="md">
              Faça seu cadastro!
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </VStack>
  );
}


