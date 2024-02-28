import { FormControl, Input, IInputProps } from 'native-base'
import { ReactNode } from 'react'

interface EntradaTextoProps extends IInputProps{
  label?:ReactNode,
  placeholder?:string
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
}

export function EntradaTexto({label,placeholder,secureTextEntry = false }: EntradaTextoProps) : JSX.Element {
  return (
    <FormControl>
    <FormControl.Label mt={3}>
      {label}
    </FormControl.Label>
    <Input placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3} />
    </FormControl>
    )
}