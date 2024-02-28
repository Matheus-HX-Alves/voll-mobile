import { Box, ITextProps, Text } from "native-base"
import { Titulo } from "./Titulo";
import { ReactNode } from 'react'

interface DepoimentoProps extends ITextProps {
  Nome: ReactNode,
  Idade: ReactNode,
  Cidade: ReactNode,
  UF: ReactNode,
  Comentario: ReactNode
}

export function Depoimento({ Nome, Idade, Cidade, UF, Comentario }: DepoimentoProps) {
  return (
    <>
      <Titulo fontSize="md" mt={5}mb={2} color="gray.500">{Nome}, {Idade} anos, {Cidade}/{UF}</Titulo>
      <Text textAlign="justify" color={"gray.300"}>{Comentario}</Text>
    </>
  )
}
