import { GetServerSidePropsContext  } from 'next'
import Layout from "components/Layout"
import ResidentList from 'components/Residents/ResidentList'
import LocationInfo from 'components/Location/LocationInfo'
import { findLocationById } from "graphql/queries/getLocationById"
import { getValueFromParams } from 'utils'

const LocationPage = ({ location }: { location: Pickle.Location | null, hasError: boolean}) => {

	return (
		<Layout>
			<LocationInfo location={location}/>
            <ResidentList residents={location.residents}/>
		</Layout>
	)
}


export async function getServerSideProps(context: GetServerSidePropsContext) {

	try {

		const { params } = context
		const location = await findLocationById(getValueFromParams(params, 'id'))

		return {
			props: {
				location,
				hasError: false,
				statusCode: 200,
			}
		}
		
	} catch (error) {
		return {
			props: {
				location: null,
				hasError: true,
				statusCode: 400,
			}
		}
	}
}

export default LocationPage
