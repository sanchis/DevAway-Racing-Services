import drivers from './data.json';
import moment from 'moment'
import { RACES_COUNT } from '../config';

/**
 * Get data form pilot name
 * @param {*} id 
 */
export function getPilot(id) {
    return drivers.find(driver => driver._id === id);
}

/**
 * Get Ranking by race name
 * @param {*} raceName 
 */
export function getRankingByRace(raceName) {
    const raceDrivers = drivers.map(drv => {
        const { races, ...pilot } = drv;
        pilot.race = getPilotRace(drv, raceName);
        return pilot
    });
    const resultDrivers = raceDrivers.sort((driver1, driver2) =>
        sortTime(driver1.race.time, driver2.race.time)
    )
    return resultDrivers;
}

/**
 * Get ranking by pilot name
 * @param {*} id 
 */
export function getRankingByPilot(id) {
    const pilot = getPilot(id);
    const races = pilot.races.map(race => getRankingByRace(race.name));
    return { pilot, races };
}

/**
 * Get specific race from pilot
 * @param {*} pilot 
 * @param {*} raceName 
 */
export function getPilotRace(pilot, raceName) {
    return pilot.races.find(race => race.name === raceName);
}

/**
 *  Get global ranking from championship
 */
export function getGlobalRanking() {
    const ranking = new Map();
    getRaces().forEach((positions) => {
        /** For every race set the pilot and position */
        positions.forEach((pilot, position) => {
            pilot.races = pilot?.races ?? getRankingByPilot(pilot._id).races;
            const valuePilot = ranking.get(pilot._id)?.position || 0;
            ranking.set(pilot._id, { pilot, position: (valuePilot + position) });
        });
    })

    /** Sort all the positions for all the races */
    return Array.from(ranking, ([name, pilot]) => (pilot))
        .sort((driver1, driver2) => driver1.position - driver2.position)
        .map(ranking => ranking.pilot);
}

/**
 * Get all races championship
 */
export function getRaces() {
    /** Create empty array with number of races */
    return [...Array(RACES_COUNT).keys()].map(raceNumber =>
        getRankingByRace(`Race ${raceNumber}`)
    );
}

/**
 * Sort timing 
 * @param {*} time1 
 * @param {*} time2 
 */
function sortTime(time1, time2) {
    return moment(time1, 'h:mm:ss:SSS').diff(moment(time2, 'h:mm:ss:SSS'))
}
