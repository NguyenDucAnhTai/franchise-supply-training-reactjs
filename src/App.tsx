import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoutes from './routes/admin/index';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
