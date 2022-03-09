import * as Styled from './styles'
import { Link } from 'react-router-dom'

import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext'

import { IoExitOutline, IoPerson } from "react-icons/io5";

export const Header = () => {

  const { userData, userLogout } = useContext(UserContext)

  return (
    <Styled.Header>
      <Styled.Nav>
        <Link to="/">
          <h1>Empresa</h1>
        </Link>

        <Styled.User>
          { userData ? 
            <Styled.UserName>
              
              <Styled.Span>
                <IoPerson size={14} color={'#8257e5'} />
                {userData.data.name}
              </Styled.Span>  

              <Styled.Button onClick={userLogout}>
                <IoExitOutline size={20} color={'#8257e5'} />
              </Styled.Button>

            </Styled.UserName>
            : <></>
          }
        </Styled.User>

      </Styled.Nav>
    </Styled.Header>
  )
}
