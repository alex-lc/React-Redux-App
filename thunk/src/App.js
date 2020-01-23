import React from 'react';
import styled from 'styled-components';

// components
import MovieList from './components/MovieList';
import Header from './components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #273935;

  .content {
    margin: 15% 0 5% 0;
    width: 75%;
    background: #B9C297;
    padding: 5%;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 #1a1a1a;

    h1 {
      font-size: 3rem;
      font-weight: 200;
      color: #273935;
      margin-bottom: 5rem;
    }
  }
`;

function App() {
  return (
    <Container>
      <Header />
      <div class="content">
        <h1>Studio Ghibli Movie Suggestions:</h1>
        <div class="controls">
          <MovieList />
        </div>
      </div>
    </Container>
  );
}

export default App;
