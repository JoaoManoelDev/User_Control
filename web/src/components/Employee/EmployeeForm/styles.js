import styled from 'styled-components'

export const Container = styled.div`

`

export const FormControl = styled.div`
  margin-bottom: 1rem;

  input {
    border: 1px solid ${props => props.theme.colors.gray};
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.6rem;
    border-radius: 0.4rem;
    background: ${props => props.theme.colors.gray};
    transition: 0.2s;
  }

  input:focus,
  input:hover {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.secondary};
  } 

  label {
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
  color: ${props => props.theme.colors.white};

  }

  select {
    border: 1px solid ${props => props.theme.colors.gray};
    width: 100%;
    font-size: 0.9rem;
    padding: 0.6rem;
    border-radius: 0.4rem;
    background-color: ${props => props.theme.colors.gray};
  }

  
`