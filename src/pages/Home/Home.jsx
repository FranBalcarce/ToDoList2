import React from 'react';
import styled from 'styled-components';


const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 5rem;
`;


const Home = () => {
  return (
    <>
      <HomeContainer>
        <div className='text'>
          <h1>Home</h1>
          <p>Este es el home</p>
        </div>
      </HomeContainer>
    </>
  );
};

export default Home;