import { Navbar as BulmaNavbar } from 'react-bulma-components';
import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isActive, setIsActive] = React.useState(false);


    return (
        <BulmaNavbar
            active={isActive}
            color="primary">
            <BulmaNavbar.Brand>
                <BulmaNavbar.Item renderAs="a" href="#">
                    DevAway Racing Services
                </BulmaNavbar.Item>
                <BulmaNavbar.Burger onClick={() => setIsActive(!isActive)} />
            </BulmaNavbar.Brand>
            <BulmaNavbar.Menu >
                <BulmaNavbar.Container>
                    <NavLink className="navbar-item" to="/" exact activeClassName="is-active">Global Ranking</NavLink>
                    <NavLink className="navbar-item" to="/pilot-races" activeClassName="is-active">Pilot Races</NavLink>
                    <NavLink className="navbar-item" to="/races" activeClassName="is-active">Races</NavLink>
                </BulmaNavbar.Container>
            </BulmaNavbar.Menu>
        </BulmaNavbar>
    );
}