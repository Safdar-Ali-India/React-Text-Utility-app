import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}));

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <StyledContainer>
        <TextForm head="Enter Your Text This Way 👇" />
      </StyledContainer>
    </>
  );
}

export default App;
