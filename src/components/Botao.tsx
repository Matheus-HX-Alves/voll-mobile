import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface BotaoProps extends IButtonProps{
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export function Botao({ children, autoSize, color,...rest }:BotaoProps ) {
  return(
  <Button w={autoSize ? 'auto' : '100%'}
  bg={color || 'blue.800'}
  size="lg"
  height="50px"
  mt={5}
  borderRadius="lg"
  _text={{ color: 'white' }} {...rest}>
          {children}
        </Button>
  )
}