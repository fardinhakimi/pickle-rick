import { useState, useReducer, useEffect } from "react"
import { useDimension , useType} from "hooks"
import LocationCard from "./LocationCard"
import { StyledLocationContainer, StyledButton, StyledLoadMoreWrapper } from 'components/Location/location.components'

enum actionTypes {
    UPDATE_LOCATION_LIST='updateLocationList',
    RESET='reset',
}

function locationsReducer(state: Pickle.LocationFilterResult, action: { payload: Pickle.LocationFilterResult, type: actionTypes}) {
    switch (action.type) {
      case actionTypes.UPDATE_LOCATION_LIST:
        return {
            info: { ...action.payload.info},
            results: [...state.results, ...action.payload.results]
        }
        case actionTypes.RESET: 
        return {
            info: { ...action.payload.info},
            results: [...action.payload.results]
        }
        
      default:
        return state
    }
}


const LocationList = ({ locations }: { locations: Pickle.LocationFilterResult }) => {

    const [page, setPage] = useState(2)
    const [currentLocations, dispatch] = useReducer(locationsReducer, locations)

    useEffect(() => {
        dispatch({ type: actionTypes.RESET, payload: locations})
    }, [locations])

    const canLoadMore = currentLocations.info.next !== null

    const { dimension } = useDimension()
    const { type } = useType()

    if( currentLocations.results.length === 0) {
        return <span> {`Nothing found for ${dimension}: ${type}`}</span>
    }

    const handleLoadMore = () => {
        if(canLoadMore) {
            const query: Record<string, any>= {
                    page,
                    dimension
            }

            if(type) query['type'] = type

            let queryString = ''

            for (const [key, value] of Object.entries(query)) {
                queryString=`${queryString}&${key}=${value}`
            }

            fetch(`/api/locations/filter?${queryString}`)
            .then( response => response.json())
            .then( response => {
                dispatch({ type: actionTypes.UPDATE_LOCATION_LIST, payload: response.locations})
                setPage(page+1)
            })
            .catch( error => {
                console.error(error)
            })
        }
    }

    return (
        <>
            <StyledLocationContainer>
                {currentLocations.results.map( location => <LocationCard key={location.id} location={location}/>)}
            </StyledLocationContainer>
            <StyledLoadMoreWrapper>
                { canLoadMore && <StyledButton onClick={handleLoadMore} theme={{bg: 'var(--pink)', color: 'var(--white)'}}>Load More</StyledButton> }
            </StyledLoadMoreWrapper>
        </>
    )
}

export default LocationList