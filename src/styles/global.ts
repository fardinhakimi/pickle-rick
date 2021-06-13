import { createGlobalStyle } from 'styled-components'
import { normalize } from './normalize'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${colors}
`