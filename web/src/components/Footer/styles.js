import styled from 'styled-components'

export const Footer = styled.footer`
  margin: 1.3rem auto 0 auto;
  grid-area: FT;
  width: 100vh;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Span = styled.span`
  font-size: 16px;
`