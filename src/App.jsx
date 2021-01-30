import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Ranking from 'pages/ranking'
import PilotRaces from 'pages/pilot-races'
import Races from 'pages/races'
import Home from 'pages/home'

import Navbar from 'components/navbar';
import { Container, Section } from 'react-bulma-components'

function App() {

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
                                <Home></Home>
                            </Route>
                            <Route
                                exact
                                path="/ranking" >
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
