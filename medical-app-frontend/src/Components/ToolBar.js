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
                        <NavbarBrand href="/" style={{color:"white"}}className="mr-auto">Patient Connect</NavbarBrand>
                        : <NavbarBrand style={{color:"white"}}className="mr-auto">Patient Connect</NavbarBrand>
                    }
                    <NavbarToggler onClick={this.toggleNav} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            {
                                this.props.login ? 
                                <NavItem>
                                    <NavLink href="/login">Log In</NavLink>
                                </NavItem> : null
                            }
                            {
                                this.props.register ? 
                                <NavItem>
                                    <NavLink href="/register">Register</NavLink>
                                </NavItem> : null
                            }
                            {
                                this.props.home ?
                                <NavItem>
                                    <NavLink href={"/home/"+this.props.id}>Home</NavLink>
                                </NavItem> : null
                            }
                            {
                                this.props.addPrescription ?
                                <NavItem>
                                    <NavLink href={"/add_prescription/"+this.props.id}>Add Prescription</NavLink>
                                </NavItem> : null
                            }
                            {
                                this.props.viewPatients ?
                                <NavItem>
                                    <NavLink href={"/view_patients"}>View Patients</NavLink>
                                </NavItem> : null
                            }
                            {
                                this.props.viewDoctors ?
                                <NavItem>
                                    <NavLink href={"/view_doctors"}>View Doctors</NavLink>
                                </NavItem> : null
                            }
                            {
                                this.props.viewPrescription ?
                                <NavItem>
                                    <NavLink href={"/view_prescriptions/"+this.props.id}>View Prescriptions</NavLink>
                                </NavItem> : null
                            }
                            {
                                this.props.loggedIn ? 
                                null : <NavItem>
                                    <NavLink href="/">Log Out</NavLink>
                                </NavItem>
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
    loggedIn: PropTypes.bool,
    home: PropTypes.bool,
    viewPrescriptions: PropTypes.bool,
    viewPatients: PropTypes.bool,
    addPrescriptions: PropTypes.bool
}

export default ToolBar;
