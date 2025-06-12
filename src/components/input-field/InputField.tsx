import { ComponentProps, FC } from 'react'

import { Input, InputContainer, InputLabel } from './styled'

type InputFieldProps = ComponentProps<'input'> & {
  label: string
  hasError?: boolean
}

export const InputField: FC<InputFieldProps> = ({
  label,
  hasError,
  ...rest
}) => {
  return (
    <InputContainer>
      <InputLabel id={`label-${rest.id}`}>{label}</InputLabel>
      <Input
        aria-describedby={`label-${rest.id}`}
        $hasError={hasError}
        {...rest}
      />
    </InputContainer>
  )
}
