import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { CategoryDetail } from './pages/CategoryDetail';
import { CourseDetail } from './pages/CourseDetail';
import { Info } from './pages/Info';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Plans } from './pages/Plans';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryDetail />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/course/:id" element={<CourseDetail />} />
          </Routes>
        </Layout>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
