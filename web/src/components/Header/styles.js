import styled from 'styled-components'

export const Header = styled.header`
  background: ${props => props.theme.colors.background};
  width: 100%;
  grid-area: HD;
  border-bottom: 1px solid ${props => props.theme.colors.backgroundSecondary};
  
  h1 {
    color: ${props => props.theme.colors.primary};
  }

`

export const Nav = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.3rem;
`

export const User = styled.div``

export const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1.5rem;

`

export const Span = styled.span`
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.2rem;
`

export const Button = styled.button`
  background: ${props => props.theme.colors.background};
  border: none;
  cursor: pointer;
`
