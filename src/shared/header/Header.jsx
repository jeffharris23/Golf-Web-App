import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';
import {Icon, SideNav, SideNavItem, Button} from 'react-materialize'

function mapStateToProps(state) {
    return { user: state.user };
}

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          navOpen: false
        };
    }    

    toggleNav = () => {
        this.setState({
            navOpen : !this.state.navOpen
        });
    }
    render() {
        return (
            <header>
                <div className="container">
                <NavLink exact to='/' className="logo" activeClassName="active">
                    <img src="/images/logo.svg" alt="Logo"/>
                </NavLink>
                    <SideNav
                        trigger={<Button flat waves='light' icon='menu' />}
                        options={{ closeOnClick: true }}
                        >
                        <SideNavItem userView
                            user={{
                            background: 'https://placeimg.com/500/300/arch',
                            image: 'https://placeimg.com/300/300/people',
                            name: 'John Doe',
                            email: 'jdandturk@gmail.com'
                            }}
                        />
                        <NavLink exact to='/' className="nav-item nav-link" activeClassName="active"><Icon>home</Icon>Home</NavLink>
                        <NavLink exact to='/players' className="nav-item nav-link" activeClassName="active"><Icon>group_add</Icon>New Game</NavLink>
                        <SideNavItem divider />
                        <NavLink exact to='/' className="nav-item nav-link" activeClassName="active"><Icon>settings</Icon>Settings</NavLink>
                    </SideNav>
                </div>
            </header>

        );
    }
}

export default connect(mapStateToProps)(Header);

