import { Box, Text} from 'native-base'
import { ReactNode } from 'react'
import { Titulo } from './Titulo'

interface DadosUsuario {
  Nome:ReactNode,
  DataNascimento:ReactNode,
  Cidade:ReactNode,
  Uf:ReactNode,
}

export function DadosUsuario({ Nome, DataNascimento, Cidade, Uf , ...rest })  {
  return (
    <Box mt={0}  flex={1} alignItems="center" {...rest}>
    <Titulo mb={2} fontSize="lg">{Nome}</Titulo>
      <Text mb={1} fontSize="md">{DataNascimento}</Text>
      <Text fontSize="md">{Cidade} - {Uf}</Text>
    </Box>
    )
}