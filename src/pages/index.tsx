
import { GetServerSidePropsContext } from 'next'
import Layout from "components/Layout"
import { filterLocations } from 'graphql/queries/filterLocations'
import { getDimensionByCode, getValueFromQuery } from 'utils'
import LocationLayout from 'components/Location/LocationLayout'

export default function Home({ locations }: { locations: Pickle.LocationFilterResult}) {

  return (
    <Layout>
      <LocationLayout locations={locations}/>
    </Layout>
  )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {

    try {

      const { query } = context
  
      const type = getValueFromQuery(query, 'type')
      const dimension = getDimensionByCode(context.locale as Pickle.DimensionCode)

      const locations = await filterLocations({
        page: 1, 
        dimension,
        type
      })
      
      return {
        props: {
          locations,
          hasError: false,
          statusCode: 200,
        }
      }
      
    } catch (error) {
      return {
        props: {
          locations: {
            info: {},
            results: []
          },
          hasError: true,
          statusCode: 400
        }
      }
    }
}
