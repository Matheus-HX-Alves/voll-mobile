import { Avatar, VStack, Text } from "native-base";
import { Titulo } from "./Titulo";
import { Botao } from "./Botao";

interface CardConsultaProps  {
  Nome: string,
  Foto: string,
  Especialidade: string,
  Data?: string,
  foiAtendido?: boolean,
  foiAgendado?: boolean,
}

export function CardConsulta({ Especialidade, Foto, Nome, Data, foiAgendado, foiAtendido }: CardConsultaProps) {
  return (
    <VStack pb={5} my={2} width={"100%"} borderWidth="1" borderColor="coolGray.200" borderRadius="lg" bg={foiAtendido ? "blue.100" : "#fff"} >
      <VStack p={5} flexDir="row">
        <Avatar size={"lg"} source={{ uri: Foto }}/>
        <VStack space={1} ml={5}>
          <Titulo textAlign={"start"} bold>{Nome}</Titulo>
          <Text color={"gray.500"}>{Especialidade}</Text>
          <Text color={"gray.500"}>{Data}</Text>
        </VStack>
      </VStack>
      <Botao alignSelf={"center"} height="40px" width={"90%"} mt={0}>{foiAgendado && !foiAtendido ? "Cancelar" : "Agendar Consulta"}</Botao>
    </VStack>
  )
}