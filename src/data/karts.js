import drivers from './data.json';
import moment from 'moment'

export function getPilot({ name }) {
    return drivers.find(driver => driver.name === name);
}

export function getRankingPilot({ name, raceName }) {
    console.log(drivers);
    const pilot = getPilot({ name });
    const race = getRacePilotByName(pilot, raceName);
    const ranking = [{ pilot, race }];

    const restDrivers = drivers.filter(dr => dr.name !== name).map(drv => {
        const pilotMap = getPilot({ name: drv.name });
        return { pilot: pilotMap, race: getRacePilotByName(pilotMap, raceName) }
    });
    const resultDrivers = [...ranking, ...restDrivers].sort((driver1, driver2) => moment(driver1.race.time).diff(moment(driver2.time)))
    return resultDrivers;
}

export function getRacePilotByName(pilot, raceName) {
    return pilot.races.find(race => race.name === raceName);
}




// export function getPilotRanking({ name }) {
//     getPilot({ name }).races.forEach(race => {
//         const otherPilots = drivers.filter(driver => driver.name !== name).map(driver => {
//             const { races, ...rest } = driver;
//             return getRacePilot({ name: driver.name, raceName: race.name })
//         });
//         console.log(otherPilots);
//     });
// }


