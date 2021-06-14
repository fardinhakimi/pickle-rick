
import styled from 'styled-components'
import { space } from '@styled-system/space'

export const StyledLayout = styled.div`
  background-color: var(--gray-lighten);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
  "header"
  "content"
`

export const StyledContainer = styled.div`
display: inline;
${space({ px: '150px' })};
`

export const StyledContent = styled.section`
	grid-area: content;
  min-height: calc(100vh - 300px);
`

export const StyledHeader = styled.div`
  height: 300px;
  display: flex;
  color: var(--white);
  background-image: url('/images/pickle.jpg');
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`

export const StyledDimensionLabel = styled.h1`
  align-self: center;
  text-transform: capitalize;
  font-size: 40px;
  text-shadow: 2px 2px var(--pink);
`