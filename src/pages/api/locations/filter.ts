import { filterLocations } from 'graphql/queries/filterLocations'
import { NextApiRequest, NextApiResponse } from 'next'
import { getValueFromQuery } from 'utils'
export const filterLocationsEndpoint = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {

	try {
    
        if (req.method !== 'GET') return res.status(400).end()

        const { query } = req

        const dimension = getValueFromQuery(query, 'dimension')

        if (!dimension) return res.status(400).end()

        const locations = await filterLocations({
            page: Number(getValueFromQuery(query, 'page')), 
            dimension,
            type: getValueFromQuery(query, 'type')
        })
        
        return res.send({ locations })

	} catch (err) {
		const errorMessage = `Failed to fetch locations`
		console.error(err, errorMessage)
		return res.status(500).end({ errorMessage })
	}
}

export default filterLocationsEndpoint
