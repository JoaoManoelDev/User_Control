import styled from 'styled-components'

export const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FormContents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 2rem;
  padding: 1rem 0;
`

export const EmployeeContents = styled.div``

export const ProfileContents = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  h1 {
    margin-bottom: 0.8rem;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    background: ${props => props.theme.colors.danger};
    margin-top: 0.5rem;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${props => props.theme.colors.danger}
    }
  }

`