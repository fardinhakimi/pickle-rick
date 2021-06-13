import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { StyledMedia } from 'components/Location/LocationCard'

const ResidentCard = ({ resident }: { resident: Pickle.Character }) => {

  return (
        <Card>
        <CardActionArea>
            <StyledMedia
            image={resident.image}
            title={resident.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {resident.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Status: { resident.status}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Species: { resident.species}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
  )
}

export default ResidentCard