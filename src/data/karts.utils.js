import drivers from './data.json';
import moment from 'moment'
import { RACES_COUNT } from '../config';

/**
 * Get data form pilot name
 * @param {*} name 
 */
function getPilot(name) {
    return drivers.find(driver => driver.name === name);
}

/**
 * Get Ranking by race name
 * @param {*} raceName 
 */
function getRankingByRace(raceName) {
    const raceDrivers = drivers.map(drv => {
        const { races, ...pilot } = drv;
        return { pilot, race: getPilotRace(drv, raceName) }
    });
    const resultDrivers = raceDrivers.sort((driver1, driver2) =>
        sortTime(driver1.race.time, driver2.race.time)
    )
    return resultDrivers;
}

/**
 * Get ranking by pilot name
 * @param {*} pilotName 
 */
function getRankingByPilot(pilotName) {
    const pilot = getPilot(pilotName);
    const races = pilot.races.map(race => getRankingByRace(race.name));
    return { pilot, races };
}

/**
 * Get specific race from pilot
 * @param {*} pilot 
 * @param {*} raceName 
 */
function getPilotRace(pilot, raceName) {
    return pilot.races.find(race => race.name === raceName);
}

/**
 *  Get global ranking from championship
 */
function getGlobalRanking() {
    const ranking = new Map();

    /** Create empty array with number of races */
    [...Array(RACES_COUNT).keys()].map(raceNumber =>
        getRankingByRace(`Race ${raceNumber}`)
    ).forEach((positions) => {
        /** For every race set the pilot and position */
        positions.forEach(({ pilot }, position) => {
            const valuePilot = ranking.get(pilot.name) || 0;
            ranking.set(pilot.name, position + valuePilot);
        });
    })

    /** Sort all the positions for all the races */
    return Array.from(ranking, ([name, position]) => ({ name, position }))
        .sort((driver1, driver2) => driver1.position - driver2.position);
}

/**
 * Sort timing 
 * @param {*} time1 
 * @param {*} time2 
 */
function sortTime(time1, time2) {
    return moment(time1, 'h:mm:ss:SSS').diff(moment(time2, 'h:mm:ss:SSS'))
}


export { getPilot, getRankingByRace, getRankingByPilot, getPilotRace as getRacePilotByName, getGlobalRanking };
