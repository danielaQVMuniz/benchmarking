import { rimkusTheme } from '@/theme'
import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 4rem;
  margin-top: 20rem;
  width: 90%;

  & > fieldset {
    border-color: ${rimkusTheme.blue.primary};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4rem 2rem;
  }

  & legend {
    color: ${rimkusTheme.blue.primary};
    font-size: 2.4rem;
  }
`

export const RetrofitFieldset = styled.fieldset`
  border-color: ${rimkusTheme.blue.light1};
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
  background-color: ${rimkusTheme.blue.light1};

  &:hover {
    background-color: ${rimkusTheme.blue.light2};
  }
`
