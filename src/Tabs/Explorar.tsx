import { VStack, Text, ScrollView } from "native-base";
import { ModalPesquisa } from "../components/ModalPesquisa";
import { Titulo } from "../components/Titulo";
import { CardConsulta } from "../components/CardConsulta";

export default function Explorar() {

  const Agendamentos = [
    {
      id: 1,
      nomeDoutor: "Péricles",
      Avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
      Especialidade: "Clinico Geral",
    },
    {
      id: 2,
      nomeDoutor: "Carolina",
      Avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
      Especialidade: "Pediatra",
    },
    {
      id: 3,
      nomeDoutor: "Rafael",
      Avatar: "https://randomuser.me/api/portraits/lego/0.jpg",
      Especialidade: "Dermatologista",
    },
    {
      id: 4,
      nomeDoutor: "Marina",
      Avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
      Especialidade: "Cardiologista",
    }
  ];
  return (
    <ScrollView>
      <VStack px={6} py={6}>
        <ModalPesquisa />
        <Titulo>Resultado da busca</Titulo>
        {Agendamentos.map((agendamento) => {
          return <CardConsulta Nome={agendamento.nomeDoutor} Foto={agendamento.Avatar} Especialidade={agendamento.Especialidade} key={agendamento.id} />
        })}
      </VStack>
    </ScrollView>
  )
}