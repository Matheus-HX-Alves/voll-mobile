import { VStack, Text, ScrollView,  Box } from "native-base";
import { Image } from "react-native";
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { Depoimento } from "../components/Depoimento";
import LogoImage from '../assets/Logo.png';
import { ModalPesquisa } from "../components/ModalPesquisa";

export default function Principal() {
  function calcularIdade(ParamsDataNascimento: string | number | Date) {
    let hoje = new Date();
    let dataNascimento = new Date(ParamsDataNascimento);
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    let mes = hoje.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    return idade;
  }
  const Depoimentos = [
    {
        id: 1,
        nome: "Péricles",
        dataNascimento: "1970-03-22",
        Cidade: "São Paulo",
        UF: "SP",
        Comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum ligula eget nisl vulputate, nec congue eros malesuada. Vivamus ultricies, justo non malesuada laoreet, eros magna malesuada elit, eu fermentum orci justo at libero."
    },
    {
        id: 2,
        nome: "Thiaguinho",
        dataNascimento: "1983-03-11",
        Cidade: "Rio de Janeiro",
        UF: "RJ",
        Comentario: "Duis id velit volutpat, viverra ante non, ultrices leo. Integer vehicula tortor in vehicula placerat. In dapibus est non mi bibendum volutpat."
    },
    {
        id: 3,
        nome: "Zeca Pagodinho",
        dataNascimento: "1975-09-05",
        Cidade: "Rio de Janeiro",
        UF: "RJ",
        Comentario: "Quisque facilisis leo et libero scelerisque, vitae tincidunt enim tincidunt. Phasellus congue nisi at nunc aliquet, nec posuere lacus ullamcorper. Morbi ullamcorper accumsan volutpat."
    },
    {
        id: 4,
        nome: "Sorriso Maroto",
        dataNascimento: "1980-07-28",
        Cidade: "Rio de Janeiro",
        UF: "RJ",
        Comentario: "Nam elementum felis quis vestibulum malesuada. Nullam non velit id mi dictum tincidunt. Vivamus eleifend euismod erat id hendrerit. In hac habitasse platea dictumst."
    },
    {
        id: 5,
        nome: "Xande de Pilares",
        dataNascimento: "1979-09-25",
        Cidade: "Duque de Caxias",
        UF: "RJ",
        Comentario: "Vivamus eget nunc vestibulum, ultricies lorem sed, malesuada nulla. Curabitur ac magna at orci placerat facilisis. Nullam imperdiet velit sed tellus finibus, eu dapibus ante tristique."
    }
];

  return (
    <ScrollView flex={1}>
      <VStack px={6} py={6} borderBottomWidth="3" borderColor="gray.200" >
        <Image source={LogoImage} alt="Logo Voll" />
        <Titulo color="blue.500" my="25px" textAlign="left">Boas-vindas!</Titulo>
       <ModalPesquisa/>
      <Titulo 
    color="blue.800" mb={6}>Depoimentos</Titulo>
    <Text textAlign="justify" color={"gray.300"}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Text>
        {
          Depoimentos.map((depoimento) => {
            return <Depoimento Nome={depoimento.nome} Idade={calcularIdade(depoimento.dataNascimento).toString()} Cidade={depoimento.Cidade} UF={depoimento.UF} Comentario={depoimento.Comentario} key={depoimento.id} />
          })
        }
      </VStack>
    </ScrollView>
  )
}