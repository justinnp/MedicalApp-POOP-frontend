import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class ToolBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: true,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div>
                  <Navbar dark>
                    {this.props.loggedIn ?                     
                        <NavbarBrand style={{color:"white"}}className="mr-auto">Patient Connect</NavbarBrand>
                        : <NavbarBrand href="/" style={{color:"white"}}className="mr-auto">Patient Connect</NavbarBrand>
                    }
                    <NavbarToggler onClick={this.toggleNav} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            {
                                this.props.register ? 
                                null :
                                <NavItem>
                                    <NavLink href="/login">Log In</NavLink>
                                </NavItem>
                            }
                            {
                                this.props.login ? 
                                null :
                                <NavItem>
                                    <NavLink href="/register">Register</NavLink>
                                </NavItem>
                            }
                            {
                                this.props.loggedIn ? 
                                <NavItem>
                                    <NavLink href="/">Log Out</NavLink>
                                </NavItem> : null
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

ToolBar.propTypes = {
    login: PropTypes.bool,
    register: PropTypes.bool,
    loggedIn: PropTypes.bool
}

export default ToolBar;
