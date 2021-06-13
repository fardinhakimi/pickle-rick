import { StyledLocationTypeWrapper, StyledButton } from 'components/Location/location.components'
import { useRouter } from 'next/router'

const LocationTypeItem = ( { locationType }: { locationType: Pickle.LocationType }) => {

    const router = useRouter()

    const handleClick = () => {
        router.push({
            pathname: router.pathname,
            query: {
                type: locationType.name
            }
        })
    }

    return (
        <StyledButton theme={locationType.theme} onClick={handleClick}>{locationType.name}</StyledButton>
    )
}

const LocationTypes = ({ locationTypes}: { locationTypes: Array<Pickle.LocationType>}) => {
    return (
        <StyledLocationTypeWrapper>
            { locationTypes.map( locationType => <LocationTypeItem locationType={locationType}/>)}
        </StyledLocationTypeWrapper>
    )
}

export default LocationTypes