import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { getAllDimensions } from 'utils'
import styled from 'styled-components'

const StyledIconButton = styled(IconButton)`
    float: right;
`

const StyledListItem = styled(ListItem)`
    > a {
        width: 100%;
    }
`

const DimensionPicker = ({ handleClose }: { handleClose: () => void }) => {

    const closeModal = () => handleClose()

    return (
        <div>
            <StyledIconButton onClick={closeModal}><CloseIcon/></StyledIconButton>
            <h2>Select a dimension to enter</h2>
            <List component="nav" aria-label="main mailbox folders">
            { getAllDimensions().map( item => {
            return (
                <Link href="/" locale={item.code} passHref>
                    <StyledListItem button>
                        <a onClick={closeModal}>
                            <ListItemText>{item.name}</ListItemText>
                        </a>
                    </StyledListItem>
                </Link>
                )
            })
            }
            </List>
        </div>
    )
}

export default DimensionPicker