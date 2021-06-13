import Error from 'next/error'

const PickleError = ({ statusCode }: { statusCode: number}) => {

	return (
		<div>
            <Error statusCode={statusCode} />
        </div>
	)
}

export default PickleError
