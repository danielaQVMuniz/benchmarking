import styled from 'styled-components'

import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 40px;
  margin-top: 200px;
  width: 90%;
`

export const FormCard = styled(Card)`
  background: linear-gradient(90deg, #edede9 0%, hsla(192, 17%, 94%, 1) 100%);
`

export const CustomTextField = styled(TextField).attrs({
  size: 'small',
  variant: 'outlined',
})``

export const FormDynamicValuesWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
