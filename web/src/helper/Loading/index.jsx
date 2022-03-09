import * as Styled from './styles';

export const Loading = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <Styled.Container>
      <Styled.Loader />
    </Styled.Container>
  )
}