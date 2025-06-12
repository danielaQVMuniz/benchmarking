import styled from 'styled-components'

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex-grow: 1;
`

export const PageLayoutGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 70%;
`
