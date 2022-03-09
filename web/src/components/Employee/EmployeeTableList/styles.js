import styled from 'styled-components'

export const Container = styled.div`

  table {
    width: 100%;
    font-size: 13px;
    color: ${props => props.theme.colors.white};
    white-space: nowrap;
    border-collapse: collapse;

    th,
    td {
      padding: 10px 15px;
    }

    td {
      border: 1px solid #363636;
    }

    thead {
      background: ${props => props.theme.colors.primary};
      
      th {
        padding: 10px;
      }

      th:first-child {
        border-radius: 8px 0 0 0;
      }

      th:last-child {
        border-radius: 0 8px 0 0;
      }

    }

    tbody {
      tr td img {
        display: inline-block;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        object-fit: cover;
      }

      tr td a {
        background: ${props => props.theme.colors.warning};
        padding: 0.3rem 0.5rem;
        border-radius: 4px;
        font-weight: bold;
      }
    }
  }
`