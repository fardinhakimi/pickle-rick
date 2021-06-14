
import styled from 'styled-components'
import { space } from '@styled-system/space'
import { StyledButton } from 'components/Location/location.components'

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
  display: block;
  ${space({ px: '150px' })};
`

export const StyledContent = styled.section`
	grid-area: content;
  min-height: calc(100vh - 300px);
`

export const StyledHeader = styled.div`
  max-height: 300px;
  color: var(--white);
  background-image: url('/images/pickle.jpg');
  background-size: cover;
  background-position: center;
  ${space({py: 5})}
`

export const StyledDimensionLabel = styled.h1`
  align-self: center;
  text-transform: capitalize;
  font-size: 40px;
  text-shadow: 2px 2px var(--pink);
  ${space({m: 0, p: 0})}
`

export const StyledDimensionAction = styled.div`
  float: right;
  ${space({pt: 3})}
  ${StyledButton} {
    :hover {
      background-color: var(--gray-lighten);
      color: var(--black);
    }
  }
`