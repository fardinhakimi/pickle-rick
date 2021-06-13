
import { StyledContainer } from 'components/Layout/layout.components'
const Container = ({ children }: { children?: any }) => {
  return (
      <StyledContainer>
        {children}
      </StyledContainer>
  )
}

export default Container