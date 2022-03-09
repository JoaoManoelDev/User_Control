import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 3rem 3rem 3rem;
`

export const FormControl = styled.div`
  margin-bottom: 1rem;

  input {
    border: 1px solid ${props => props.theme.colors.primary};
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: ${props => props.theme.colors.default};
    transition: 0.2s;

    &:focus,
    &:hover {
      outline: none;
      background: white;
      box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
    }
  }

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
    color: ${props => props.theme.colors.white};
  }

`
