import { Routes, Route } from "react-router-dom";
import ScrollToLocation from "./components/ScrollToLocation";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToLocation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
