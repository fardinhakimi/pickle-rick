import client from "./apollo-client"
import { gql } from "@apollo/client"

const filterLocationsQuery = gql`query filterLocations($page: Int, $filter: FilterLocation) {
    locations (page: $page, filter: $filter){
        info {
            pages
            next
            prev
            count
        }
        results {
            id
            name
            type
            dimension
            created
        }
    }
  }
`

type LocationFilter = {
    page: number,
    dimension: string,
    type?: string
}

export const filterLocations = async (filter: LocationFilter) => {

    const { page, ...filterBy} = filter

    try {
        const response: { data: { locations: Pickle.LocationFilterResult}} = await client.query({
            query: filterLocationsQuery,
            variables: {
                page: page,
                filter: filterBy
            }
         })
         
         return response.data.locations
        
    } catch (error) {
        console.error(error, 'Failed to fetch locations')
        throw new Error()
    }
}

