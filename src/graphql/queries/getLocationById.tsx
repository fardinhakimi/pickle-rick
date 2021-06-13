import client from "./apollo-client"
import { gql } from "@apollo/client"

const queryLocationById = gql`
    query locationById($id: ID!) {
        location(id: $id){
            id
            name
            type
            dimension
            residents {
                id
                name
                status
                species
                type
                gender
                image
                origin {
                    id
                    name
                }
            }
            created
        }
    }
`

export const findLocationById = async (id: string) => {
    try {
        const response: { data: { location: Pickle.Location }} = await client.query({
            query: queryLocationById,
            variables: { id }
         })
         return response.data.location
        
    } catch (error) {
        console.log(error)
        console.error(error, `Failed to find a location with id of ${id}`)
        throw new Error()
    }
}

