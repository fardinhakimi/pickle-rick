import { StyledHeader, StyledDimensionLabel } from 'components/Layout/layout.components'
import StyledContainer from 'components/Layout/Container'
import { useDimension } from 'hooks'

export const Header = () => {
    const { dimension } = useDimension()
  return (
    <StyledHeader>
        <StyledContainer>
            <StyledDimensionLabel> Visit your favorite locations at {dimension}</StyledDimensionLabel>
        </StyledContainer>
    </StyledHeader>
  )
}

export default Header;
