import './App.css';
import { getRankingByPilot, getRankingByRace, getGlobalRanking } from './data/karts.utils';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Ranking from 'pages/ranking'
import PilotRaces from 'pages/pilot-races'
import Races from 'pages/races'

import Navbar from 'components/navbar';
import { Container, Section } from 'react-bulma-components'

function App() {

  console.log('getRankingByRace', getRankingByRace('Race 0'));
  console.log('getRankingByPilot', getRankingByPilot('Daniels Manning'));
  console.log('getGlobalRanking', getGlobalRanking());

  return (
    <>
      <BrowserRouter basename="/DevAway-Racing-Services">
        <Navbar></Navbar>
        <Section>
          <Container>
            <Switch>
              <Route
                exact
                path="/">
                <Ranking></Ranking>
              </Route>
              <Route
                exact
                path="/pilot-races" >
                <PilotRaces></PilotRaces>
              </Route>
              <Route
                exact
                path="/races"
                render={() => <Races />} />
            </Switch>
          </Container>
        </Section>
      </BrowserRouter>
    </>
  );
}

export default App;
