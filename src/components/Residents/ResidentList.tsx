import ResidentCard from 'components/Residents/ResidentCard'
import { ResidentsContainer } from 'components/Residents/residents.components'

const ResidentList = ({ residents }: { residents: Array<Pickle.Character>}) => {
    return (
        <>
           <h2> Residents </h2>
            <ResidentsContainer>
                {    residents.map( resident => <ResidentCard resident={resident} />)}
            </ResidentsContainer>
        </>
    )
}


export default ResidentList 