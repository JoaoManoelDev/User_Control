import styled from 'styled-components'

export const Main = styled.main`
  grid-area: MN;
  overflow-y: scroll;
  width: 100%;
  padding: 0 1rem 0 1.5rem;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-thumb { 
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track { 
    background: ${props => props.theme.colors.background};
  }
`