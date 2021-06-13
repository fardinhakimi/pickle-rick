import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Link from 'next/link'

export const StyledMedia = styled(CardMedia)`height: 140px;`

const getImageName = () => {
    const images = ['pickle1.jpeg', 'pickle2.jpg', 'pickle3.jpeg'] 
    return images[Math.floor(Math.random()*images.length)]
}

const LocationCard = ({ location }: { location: Pickle.Location }) => {

  return (
    <Link href={`/locations/${location.id}`}>
        <Card>
        <CardActionArea>
            <StyledMedia
            image={`/images/${getImageName()}`}
            title={location.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {location.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                { location.dimension}: { location.type}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </Link>
  )
}

export default LocationCard