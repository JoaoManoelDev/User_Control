import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100%;
  padding: 3rem;
`
export const Error = styled.main`
  margin: 0 auto;
  max-width: 40rem;
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 10px;
  padding: 3rem 2rem;
  border-top: 3px solid ${props => props.theme.colors.primary};

  p {
    color: ${props => props.theme.colors.white};
    font-size: 2rem;
  }
`