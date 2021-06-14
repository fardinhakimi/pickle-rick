import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'
import { space } from '@styled-system/space'
import DimensionPicker from 'components/DimensionPicker'

const StyledModal = styled(Modal)`
  overflow-y: scroll;
  background-color: var(--black);
  ::-webkit-scrollbar {
        display: none;
    }
  > div {
    > h2 {
      text-transform: capitalize;
      ${space({ pl: '15px'})}
    }
    background-color: var(--gray-lighten);
    color: var(--black);
    width: 500px;
    ${space({ m: 'Auto', p: '20px'})}
  }
`
const DimensionPickerModal = ({ open, handleClose }: { open: boolean, handleClose: () => void}) => {

  return (
    <div>
      <StyledModal
        open={open}
        onClose={() => {handleClose()}}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      > 
        <DimensionPicker handleClose={handleClose}/>
      </StyledModal>
    </div>
  )
}

export default DimensionPickerModal