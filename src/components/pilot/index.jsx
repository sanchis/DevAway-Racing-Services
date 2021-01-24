import { Box, Media, Image, Content } from 'react-bulma-components'
import './styles.css';

export default function Pilot({ pilot, position }) {
    return (
        <Box className="pilot">
            <Media>
                <h2 className="is-size-2 position">{position}</h2>
                <Media.Item renderAs="figure" position="left">
                    <Image size={64} alt="64x64" src={pilot.picture} />
                </Media.Item>
                <Media.Item>
                    <Content>
                        <p>
                            <strong>{pilot.name}</strong> <small>Age: {pilot.age}</small>
                            <br />
                            Team: {pilot.team}
                        </p>
                    </Content>
                </Media.Item>
            </Media>
        </Box>
    );
}