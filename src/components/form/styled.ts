import { rimikusTheme } from '@/theme'
import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 4rem;
  margin-top: 20rem;
  width: 90%;

  & > fieldset {
    border-color: ${rimikusTheme.blue.primary};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4rem 2rem;
  }

  & legend {
    color: ${rimikusTheme.blue.primary};
    font-size: 2.4rem;
  }
`

export const RetrofitFieldset = styled.fieldset`
  border-color: ${rimikusTheme.blue.light1};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 2rem;
`

export const AddRetrofitArrowButton = styled.button`
  transition: all ease-in-out 0.3s;
  padding: 2rem 3rem;
  font-size: 1.8rem;
  color: white;
  background-color: ${rimikusTheme.blue.light1};

  &:hover {
    background-color: ${rimikusTheme.blue.light2};
  }
`
