import { useState } from 'react'
import { StyledHeader, StyledDimensionLabel, StyledContainer } from 'components/Layout/layout.components'
import { useDimension } from 'hooks'
import CustomModal from 'components/CustomModal'
import DimensionPicker from 'components/DimensionPicker'
import { StyledButton } from 'components/Location/location.components'

export const Header = () => {
    const { dimension } = useDimension()
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    

  return (
    <StyledHeader>
        <StyledContainer>
          <StyledButton theme={{ bg: 'var(--gray-darken)', color: 'var(--white)'}} type="button" onClick={handleOpen}> Select a dimension</StyledButton>
          <CustomModal open={open} handleClose={handleClose}>
            <DimensionPicker/>
          </CustomModal>
          <StyledDimensionLabel> Visit your favorite locations at {dimension}</StyledDimensionLabel>
        </StyledContainer>
    </StyledHeader>
  )
}

export default Header;
