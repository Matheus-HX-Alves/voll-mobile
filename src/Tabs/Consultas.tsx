import { VStack, Text, Divider, ScrollView } from "native-base";
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";

export default function Consultas() {

  const Consultas = [
    {
      id: 1,
      nomeDoutor: "Péricles",
      Avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
      Especialidade: "Clinico Geral",
      dataAgendamento: "2024-02-27",
      Agendado: true,
      atendimentoRealizado: false
    },
    {
      id: 2,
      nomeDoutor: "Carolina",
      Avatar: "https://randomuser.me/api/portraits/lego/0.jpg",
      Especialidade: "Pediatra",
      dataAgendamento: "2024-02-25",
      Agendado: true,
      atendimentoRealizado: true
    },
    {
      id: 3,
      nomeDoutor: "Rafael",
      Avatar: "https://randomuser.me/api/portraits/lego/4.jpg",
      Especialidade: "Dermatologista",
      dataAgendamento: "2024-02-23",
      Agendado: true,
      atendimentoRealizado: true
    },
    {
      id: 4,
      nomeDoutor: "Marina",
      Avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
      Especialidade: "Cardiologista",
      dataAgendamento: "2024-02-20",
      Agendado: true,
      atendimentoRealizado: true
    }
  ];

  return (
    <ScrollView>
      <VStack flex={1} pt={2}  px={6} py={6}>
        <Titulo mt={"20px"} color={"blue.500"} bold>Minhas Consultas</Titulo>
        <Botao my={"10px"}>Agendar outra consulta</Botao>
        <Titulo my={"10px"} color={"blue.500"} bold fontSize={"lg"} right={90}>Próximas consulta</Titulo>
        {Consultas.map((consulta) => {
          if (consulta.atendimentoRealizado == false) {
            return <CardConsulta Nome={consulta.nomeDoutor} Foto={consulta.Avatar} Especialidade={consulta.Especialidade} Data={consulta.dataAgendamento} foiAgendado={consulta.Agendado} foiAtendido={consulta.atendimentoRealizado} key={consulta.id} />
          }
        })}
        <Divider my={"15px"} bg={"gray.500"} />
        <Titulo my={"10px"} color={"blue.500"} bold fontSize={"lg"} right={85}>Consultas passadas</Titulo>
        {Consultas.map((consulta) => {
          if (consulta.atendimentoRealizado == true) {
            return <CardConsulta Nome={consulta.nomeDoutor} Foto={consulta.Avatar} Especialidade={consulta.Especialidade} Data={consulta.dataAgendamento} foiAgendado={consulta.Agendado} foiAtendido={consulta.atendimentoRealizado} key={consulta.id} />
          }
        })}
      </VStack>
    </ScrollView>
  )
}