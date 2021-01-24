import { Table } from 'react-bulma-components'

export default function Race({ race, name, hightLightPilot }) {
    return (
        <>
            <h2 className="is-size-2">{name}</h2>
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
                        <tr key={position} className={pilot.name === hightLightPilot ? 'is-selected' : ''}>
                            <th>{position + 1}</th>
                            <th>{pilot.race.time}</th>
                            <th>{pilot.name}</th>
                            <th>{pilot.team}</th>
                            <th>{pilot.age}</th>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}