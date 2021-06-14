import Modal from '@material-ui/core/Modal'

const CustomModal = ({ open, handleClose, children }: { open: boolean, handleClose: (open:boolean) => void , children: any}) => {

  return null
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      > 
        { children }
      </Modal>
    </div>
  )
}

export default CustomModal