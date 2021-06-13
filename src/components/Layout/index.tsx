import Header from "./Header"
import Container from "./Container"
import { StyledContent, StyledLayout } from 'components/Layout/layout.components'

type Props = {
  children?: any
}

const Content = ({ children }: Props) => {
  return (
    <StyledContent>
      { children}
    </StyledContent>
  )
}

const Layout = ({ children }: Props) => {
  return (
    <StyledLayout>
      <Header />
      <Container>
        <Content>
          {children}
        </Content>
			</Container>
    </StyledLayout>
  )
}



export default Layout