import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Container, Paper } from '@material-ui/core';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {



  render() {

    return (
      <div className="container">
        <Container maxWidth="sm">
          <Typography variant='h3'>
            Jotto
          </Typography>
          <Congrats success={false} />
          <GuessedWords guessedWords={[
            { guessedWord: 'train', letterMatchCount: 3 },
            { guessedWord: 'agile', letterMatchCount: 1 },
            { guessedWord: 'party', letterMatchCount: 5 },]} />
        </Container>
      </div>
    )
  }
}

export default App;
