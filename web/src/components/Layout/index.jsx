import * as Styled from './styles'

import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'

export const Layout = ({ children }) => {
  return (
    <Styled.Grid>
      <Header />
      <Main>
        { children }
      </Main>
      <Footer />
    </Styled.Grid>
  )
}
