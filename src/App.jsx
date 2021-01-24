import './App.css';
import { getRankingByPilot, getRankingByRace, getGlobalRanking } from './data/karts.utils';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navbar from 'components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalRanking from 'pages/global-ranking'
import PilotRaces from 'pages/pilot-races'

function App() {

    console.log('getRankingByRace', getRankingByRace('Race 0'));
    console.log('getRankingByPilot', getRankingByPilot('Daniels Manning'));
    console.log('getGlobalRanking', getGlobalRanking());

    return (
        <>
            <BrowserRouter>
                <Navbar></Navbar>
                <div className="App">
                    <Switch>
                        <Route
                            exact
                            path="/">
                            <GlobalRanking></GlobalRanking>
                        </Route>
                        <Route
                            exact
                            path="/pilot-races" >
                            <PilotRaces></PilotRaces>
                        </Route>
                        {/* <Route
                            exact
                            path="/page2"
                            render={() => <Page2 />} />
                            https://medium.com/@simonhoyos/enrutando-en-react-cd9e4ad6e3d3
                        <Route component={PageError} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
