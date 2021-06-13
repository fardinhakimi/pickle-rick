
import { useRouter } from 'next/router'
import { getDimensionByCode, getValueFromQuery } from 'utils'

export const useDimension = () => {
    const { locale } = useRouter()
    return { code: locale, dimension: getDimensionByCode(locale as Pickle.DimensionCode)}
} 

export const useType = () => {
    const { query } = useRouter()
    return { type: getValueFromQuery(query, 'type') }
} 