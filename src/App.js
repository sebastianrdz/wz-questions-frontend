import React from 'react';
import './App.css';

import { Layout, RequireAuth } from './components';
import { Search, Questions, About, Contact, Admin, Answers, StartPage, NotFound} from './pages';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks'

function App() {
  const { auth } = useAuth();
  // console.log(auth.info.is_admin);
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* Public Routes */}
        <Route path="/startpage" element={<StartPage />} />
        <Route path="*" element={<NotFound/>}/>
        
        
        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Search />} />
          <Route path="/questions" element={<Questions />}/>
          <Route path="/questions/:questionId" element={<Answers />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {auth?.info?.is_admin && <Route path="/admin" element={<Admin />} />}
          
          

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
