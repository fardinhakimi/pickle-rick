import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { getAllDimensions } from 'utils'

const DimensionPicker = () => {
    return (
        <div>
            <h2>Select a dimension to enter</h2>
            <List component="nav" aria-label="main mailbox folders">
            { getAllDimensions().map( item => {
            return (
                <Link href="/" locale={item.code}>
                    <ListItem button>
                    <ListItemText primary="Inbox" >{item.name}</ListItemText>
                </ListItem>
                </Link>
                )
            })
            }
            </List>
        </div>
    )
}

export default DimensionPicker