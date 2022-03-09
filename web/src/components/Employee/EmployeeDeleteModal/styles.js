import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.backgroundOpacity};
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  opacity: 100%;
`

export const Contents = styled.div`
  width: 30rem;
  height: 11rem;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`

export const Header = styled.header`
  margin-bottom: 1.5rem;

  h1 {
    color: ${props => props.theme.colors.white};
  }
`

export const Main = styled.header`

  p {
    color: ${props => props.theme.colors.white};
  }
`

export const Footer = styled.header`
  gap: 1rem;

  button:first-child {
    background: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.black};

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${props => props.theme.colors.gray}
    }
  }

  button:last-child {
    background: ${props => props.theme.colors.danger};

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${props => props.theme.colors.danger}
    }
  }


`
