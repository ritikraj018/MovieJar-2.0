/* eslint-disable import/no-extraneous-dependencies */
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Movies, MovieInformation, Actors, Profile, NavBar } from '.';

const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <Routes>
      <Route path="/movie/:id" element={<MovieInformation />} />
      <Route path="/actors/:id" element={<Actors />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/" element={<Movies />} />
    </Routes>
  </div>
);

export default App;
