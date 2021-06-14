import { GetServerSidePropsContext  } from 'next'
import Layout from "components/Layout"
import ResidentList from 'components/Residents/ResidentList'
import LocationInfo from 'components/Location/LocationInfo'
import { StyledLocationPageWrapper } from 'components/Location/location.components'
import { findLocationById } from "graphql/queries/getLocationById"
import { getValueFromParams } from 'utils'

const LocationPage = ({ location }: { location: Pickle.Location | null, hasError: boolean}) => {

	return (
		<Layout>
			<StyledLocationPageWrapper>
				<LocationInfo location={location}/>
				<ResidentList residents={location.residents}/>
			</StyledLocationPageWrapper>
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
