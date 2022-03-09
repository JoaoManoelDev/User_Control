import * as Styled from './styles'

export const NotFound = () => {
  return (
    <Styled.Container>
      <Styled.Error>
        <h1 className="title">Erro: 404</h1>
        <p>Página não encontrada :(</p>
      </Styled.Error>
    </Styled.Container>
  )
}
