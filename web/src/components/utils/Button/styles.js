import styled from 'styled-components'

export const Button = styled.button`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primaryBorder}, 0 0 0 4px ${props => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }

`