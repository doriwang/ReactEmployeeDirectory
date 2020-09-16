import React from 'react';
import Jumbotron from "./components/Jumbotron";
import ResultsContainer from "./components/ResultsContainer"

function App() {
  return (
    <div className="row">
      <Jumbotron header="Employee Directory" subheader="Type an employee's name to search" />
      <ResultsContainer />
    </div>
  );
}

export default App;
