import { Box, ThemeProvider } from '@mui/material';
import theme from '../theme';
import './App.css';
import Routers from './routes';
import Layout from "../shared/layouts/Layout";

function App() {
  return (
      <Box className="app" width={'100%'} height={'100%'} >
          <ThemeProvider theme={theme}>
              <Layout>
                  <Routers/>
              </Layout>
          </ThemeProvider>
      </Box>
  );
}

export default App;
