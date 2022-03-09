import styled from 'styled-components'

export const Container = styled.div`
  /* background: ${props => props.theme.colors.backgroundSecondary}; */
  margin: 0 auto;
  max-width: 950px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    background: ${props => props.theme.colors.success};
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
    transition: filter 0.3s;
    font-weight: bold;

    &:hover {
      filter: brightness(90%);
    }
  }
`

export const Span = styled.span`
  font-size: 2rem;
  color: ${props => props.theme.colors.info};
`

export const Section = styled.section`
  background: ${props => props.theme.colors.backgroundSecondary};
  margin-top: 0.5rem;
  padding: 0.6rem;
  border-radius: 10px;
  color: ${props => props.theme.colors.white};
  min-height: 30rem;
  overflow: auto;

  ::-webkit-scrollbar {
    height: 0.625rem;
  }

  ::-webkit-scrollbar-thumb { 
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track { 
    background: ${props => props.theme.colors.background};
  }
`