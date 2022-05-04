import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import theme from '../theme';
import routes from '../routes';
import ErrorBoundary from '../components/ErrorBoundary';

function App(): JSX.Element {
  const routing = useRoutes(routes());

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        {routing}
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
