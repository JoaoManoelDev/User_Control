import styled from 'styled-components'

export const Section = styled.section`
  height: 100%;
  background: ${props => props.theme.colors.background};
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
`

export const Form = styled.div`
  margin: 0 auto;
  max-width: 30rem;
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 10px;
  border-top: 3px solid ${props => props.theme.colors.primary};

  img {
    height: 90px;
    width: 90px;
    /* align-items: center; */
    margin: 1.5rem auto 2rem auto;
  }
`
