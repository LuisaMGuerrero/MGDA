import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import SurveyPage from './pages/SurveyPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
