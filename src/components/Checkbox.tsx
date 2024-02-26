import { Checkbox, ICheckboxProps} from "native-base"
import { ReactNode } from 'react'

interface CheckboxProp extends ICheckboxProps {
  children: ReactNode,
  
}

export function CheckBox({children,}:CheckboxProp) {
  return(
    <Checkbox my={2} colorScheme="gray" value={""}>
            {children}
        </Checkbox>
  )
}