import { ScrollView, VStack, Avatar, Box, Text } from "native-base";
import { Titulo } from "../components/Titulo";
import { DadosUsuario } from "../components/DadosUsuario";


export default function Perfil() {
  const Usuario = {
    nome: "Julio Magalhães Alves",
    dataNascimento: "20/01/2001",
    Cidade: "São Paulo",
    UF: "SP"
  }
  return (
    <ScrollView flex={1} >
      <VStack flex={1} alignSelf="center" justifyContent="center" px={6} py={6} w="100%" >
        <Box borderColor="coolGray.200" borderWidth="2" rounded="lg" p={6}>
          <Titulo color="blue.500">Meu perfil</Titulo>
          <Avatar mt={5} size="xl" alignSelf="center" source={{ uri: "https://randomuser.me/api/portraits/lego/7.jpg" }} />
          <Titulo mt="50px" color="blue.500">Informações pessoais</Titulo>
          <DadosUsuario mt="20px" Nome={Usuario.nome} DataNascimento={Usuario.dataNascimento} Cidade={Usuario.Cidade} Uf={Usuario.UF} />
        </Box>
        <ScrollView flex={1} w={"100%"} maxH={"300px"} p={6} mt="40px" borderColor="coolGray.200" borderWidth="2" rounded="lg">
          <Titulo mb={2} color="blue.500">Histórico médico</Titulo><Text mb={2} alignSelf="center" >- Enxaqueca</Text>
          <Text mb={2} alignSelf="center" >- Resfriado comum</Text>
          <Text mb={2} alignSelf="center" >- Conjuntivite</Text>
          <Text mb={2} alignSelf="center" >- Gastrite</Text>
          <Text mb={2} alignSelf="center" >- Dermatite</Text>
          <Text mb={2} alignSelf="center" >- Tensão muscular</Text>
          <Text mb={2} alignSelf="center" >- Azia</Text>
          <Text mb={2} alignSelf="center" >- Otite</Text>
          <Text mb={2} alignSelf="center" >- Eczema</Text>
          <Text mb={2} alignSelf="center" >- Cálculo renal (Pedra nos rins)</Text>
          <Text mb={2} alignSelf="center" >- Alergia sazonal</Text>
          <Text mb={2} alignSelf="center" >- Gripe estomacal</Text>
          <Text mb={2} alignSelf="center" >- Úlcera bucal</Text>
          <Text mb={2} alignSelf="center" >- Rosácea</Text>
          <Text mb={2} alignSelf="center" >- Bronquite aguda</Text>
          <Text mb={2} alignSelf="center" >- Pé de atleta</Text>
          <Text mb={2} alignSelf="center" >- Dor de dente</Text>
          <Text mb={2} alignSelf="center" >- Faringite</Text>
          <Text mb={2} alignSelf="center" >- Candidíase</Text>
          <Text mb={2} alignSelf="center" >- Constipação</Text>
          <Text mb={2} alignSelf="center" >- Infecção de ouvido</Text>
        </ScrollView>
      </VStack>

    </ScrollView>
  )
}