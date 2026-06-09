import { Routes, Route } from 'react-router-dom';
import ArtInterest from './pages/ArtInterest.jsx';
import GamesInterest from './pages/GamesInterest.jsx';
import Home from './pages/Home.jsx';
import InterestDetail from './pages/InterestDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Projects from './pages/Projects.jsx';
import SportsInterest from './pages/SportsInterest.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/interests/art" element={<ArtInterest />} />
      <Route path="/interests/games" element={<GamesInterest />} />
      <Route path="/interests/sports" element={<SportsInterest />} />
      <Route path="/interests/:interestId" element={<InterestDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
