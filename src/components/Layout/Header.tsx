import { useState } from 'react'
import { StyledHeader, StyledDimensionLabel, StyledDimensionAction } from 'components/Layout/layout.components'
import { useDimension } from 'hooks'
import DimensionPickerModal from 'components/DimensionPickerModal'
import Container from 'components/Layout/Container'
import { StyledButton } from 'components/Location/location.components'

export const Header = () => {
    const { dimension } = useDimension()
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const buttonText = dimension ?? 'Select a dimension'
    

  return (
    <StyledHeader>
        <Container>
          <StyledDimensionAction>
            <StyledButton theme={{ bg: 'var(--gray-darken)', color: 'var(--white)'}} type="button" onClick={handleOpen}> {buttonText}</StyledButton>
          </StyledDimensionAction>
          <DimensionPickerModal open={open} handleClose={handleClose}/>
          <StyledDimensionLabel> Visit your favorite locations at {dimension}</StyledDimensionLabel>
        </Container>
    </StyledHeader>
  )
}

export default Header;
