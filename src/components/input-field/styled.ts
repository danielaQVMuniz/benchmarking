import { rimkusTheme } from '@/theme'
import styled from 'styled-components'

export const InputLabel = styled.label`
  font-size: 1.8rem;
  color: ${rimkusTheme.blue.primary};
`

export const Input = styled.input<{ $hasError?: boolean }>(
  ({ $hasError }) => `
  border-radius: 0.4rem;
  border: 0.1rem solid ${$hasError ? 'red' : rimkusTheme.blue.dark1};
  height: 4rem;
  width: 30rem;
  font-size: 1.8rem;
`
)

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
