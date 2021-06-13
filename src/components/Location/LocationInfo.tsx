
import { StyledLocationInfoContainer, StyledLocationInfoTitle } from 'components/Location/location.components'

const LocationIfo = ({ location }: { location: Pickle.Location }) => {

	const aliveResidents = location.residents.filter( item => item.status === 'Alive').length
	const deadResidents = location.residents.filter( item => item.status === 'Dead').length
	const numberOfRobots = location.residents.filter( item => item.species === 'Robot').length
	const numberOfAliens = location.residents.filter( item => item.species === 'Alien').length
	const numberOfHumans = location.residents.filter( item => item.species === 'Human').length
	const numberOfGuests = location.residents.filter ( item => item.origin.id !== location.id).length

    return (
        <StyledLocationInfoContainer>
            <div>
                <StyledLocationInfoTitle>Dimension: <span> {location.dimension} </span></StyledLocationInfoTitle>
                <StyledLocationInfoTitle>Type <span> {location.type} </span></StyledLocationInfoTitle> 
            </div>
            <div>
                <h2>Stats: </h2>
                <StyledLocationInfoTitle> Alive residents: <span>{ aliveResidents}</span></StyledLocationInfoTitle> 
                <StyledLocationInfoTitle> Dead residents: <span> { deadResidents}</span></StyledLocationInfoTitle> 
                <StyledLocationInfoTitle> Number of robots: <span> { numberOfRobots } </span></StyledLocationInfoTitle>
                <StyledLocationInfoTitle> Number of Aliens: <span> { numberOfAliens } </span></StyledLocationInfoTitle>
                <StyledLocationInfoTitle> Number of Humans: <span> { numberOfHumans } </span></StyledLocationInfoTitle>
                <StyledLocationInfoTitle> Number of guests: <span> { numberOfGuests } </span></StyledLocationInfoTitle>
            </div>
        </StyledLocationInfoContainer>
    )

}


export default LocationIfo