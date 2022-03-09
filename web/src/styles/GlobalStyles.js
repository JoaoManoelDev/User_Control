import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    height: 100%;
    overflow-y: hidden;
    background: ${props => props.theme.colors.background};
  }

  .container {
    width: min(90vw, 900px);
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: white;  
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }

  @media(max-width: 970px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }

  @media(max-width:700px) {
    :root {
      font-size: 75%; /* 12px */
    }
  }

  @media(max-width: 590px) {
    :root {
      font-size: 62.25%; /* 10px */
    }
  }

  img {
    display: block;
  }

  .title {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.white};
    margin: 1rem 0;
    position: relative;
    z-index: 1;
  }

  .title::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: ${props => props.theme.colors.primary};
    position: absolute;
    bottom: 3px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }

  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  
`