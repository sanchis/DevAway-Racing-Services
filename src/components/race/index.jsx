import { Table } from 'react-bulma-components'

export default function Race({ race, hightLightPilot }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th><abbr title="Position">Position</abbr></th>
                    <th><abbr title="Points">Time</abbr></th>
                    <th><abbr title="Name">Name</abbr></th>
                    <th><abbr title="Team">Team</abbr></th>
                    <th><abbr title="Age">Age</abbr></th>
                </tr>
            </thead>
            <tbody>
                {race.map((pilot, position) =>
                    <tr className={pilot.name === hightLightPilot ? 'is-selected' : ''}>
                        <th>{position + 1}</th>
                        <th>{pilot.race.time}</th>
                        <th>{pilot.name}</th>
                        <th>{pilot.team}</th>
                        <th>{pilot.age}</th>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}