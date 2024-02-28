import { Box } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";

export function ModalPesquisa() {
  return (
    <Box mb="30px" borderColor="coolGray.200" borderWidth="1"  p="5" rounded="lg">
      <EntradaTexto placeholder="Digite a Especialidade" />
      <EntradaTexto placeholder="Digite sua localização" />
      <Botao mb={4}>Buscar</Botao>
    </Box>
  )
}