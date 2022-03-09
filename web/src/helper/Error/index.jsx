import * as Styled from './styles'

export const Error = ({ error }) => {
  if (!error) return null;
  return( <Styled.Error>{error}</Styled.Error>)
}
