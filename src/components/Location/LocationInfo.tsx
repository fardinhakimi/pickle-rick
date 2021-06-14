
import { StyledLocationInfoContainer, StyledLocationInfoTitle } from 'components/Location/location.components'
import { calculateStats } from 'utils'

const LocationIfo = ({ location }: { location: Pickle.Location }) => {

	
    const { aliveResidents, deadResidents, robots, humans, aliens, numberOfGuests } = calculateStats(location)

    return (
        <StyledLocationInfoContainer>
            <div>
                <StyledLocationInfoTitle>Dimension: <span> {location.dimension} </span></StyledLocationInfoTitle>
                <StyledLocationInfoTitle>Type <span> {location.type} </span></StyledLocationInfoTitle> 
            </div>
            <div>
                <h2>Stats: </h2>
                <StyledLocationInfoTitle> Alive residents: <span>{aliveResidents}</span></StyledLocationInfoTitle> 
                <StyledLocationInfoTitle> Dead residents: <span> { deadResidents}</span></StyledLocationInfoTitle> 
                <StyledLocationInfoTitle> Number of resident robots: <span> { robots.total }  ({robots.percentage}%) </span></StyledLocationInfoTitle>
                <StyledLocationInfoTitle> Number of resident Aliens: <span> { aliens.total }  ({aliens.percentage}%)</span></StyledLocationInfoTitle>
                <StyledLocationInfoTitle> Number of resident Humans: <span> { humans.total }  ({humans.percentage}%)</span></StyledLocationInfoTitle>
                <StyledLocationInfoTitle> Number of guests: <span> { numberOfGuests } </span></StyledLocationInfoTitle>
            </div>
        </StyledLocationInfoContainer>
    )

}


export default LocationIfo