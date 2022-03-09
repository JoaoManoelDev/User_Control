import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.backgroundOpacity};
  z-index: 100;
`

export const Loader = styled.div`
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #8257e5;
  height: 5rem;
  width: 5rem;


  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`
