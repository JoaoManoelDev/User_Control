import GlobalStyles from "./styles/GlobalStyles";
import { AppRoutes } from './routes'
import { UserStorage } from './contexts/UserContext'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme/main'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserStorage>
          <GlobalStyles />
          <AppRoutes />
        </UserStorage>
        <Toaster />
      </Router>
    </ThemeProvider>
  )
}

export default App
