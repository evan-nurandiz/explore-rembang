import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { HomePage, MapPage, PlaceDetailPage, PlacePage } from '../container';
import { Navbar } from '../components';

const Router: React.FC = (): JSX.Element => {
  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/map" element={<MapPage/>}/>
          <Route path='/place' element={<PlacePage/>}/>
          <Route path='/place/:id' element={<PlaceDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default Router;