import { rimikusTheme } from '@/theme'
import styled from 'styled-components'

export const FormContainer = styled.form`
  margin-top: 20rem;
  margin-left: 4rem;
  width: 90%;

  & fieldset {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-color: ${rimikusTheme.blue.primary};
  }

  & legend {
    font-size: 2.4rem;
    color: ${rimikusTheme.blue.primary};
  }
`
