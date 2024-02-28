import { NativeBaseProvider, StatusBar } from 'native-base'
import { TEMAS } from './src/estilos/Temas';
import Rotas from './src/Rotas';
import Consulta from './src/Tabs/Consultas';
import Explorar from './src/Tabs/Explorar';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      <Rotas />
    </NativeBaseProvider>
    );
}
