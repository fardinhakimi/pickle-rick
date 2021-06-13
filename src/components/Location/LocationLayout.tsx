import { getLocationsTypes } from "utils"
import LocationTypes from "./LocationTypes"
import LocationList from "./LocationList"

const LocationLayout = ({ locations, children }: { locations: Pickle.LocationFilterResult, children?: any}) => {

    const types = getLocationsTypes()

    return (
        <>
            <LocationTypes locationTypes={types}/>
            <LocationList locations={locations}/>
            {children}
        </>
    )
}

export default LocationLayout