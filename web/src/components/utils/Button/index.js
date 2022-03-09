import React from 'react'

import * as Styled from './styles'

export const Button = ({ children, ...props }) => {
  return (
    <Styled.Button {...props} >
      {children}
    </Styled.Button>
  )
}
