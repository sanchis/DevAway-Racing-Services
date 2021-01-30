import { getGlobalRanking, getRaces } from 'data/karts.utils';
import React from 'react';


const kartsContext = React.createContext({
    globalRanking: getGlobalRanking(),
    races: getRaces(),
});

export default kartsContext;