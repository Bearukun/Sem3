import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {index} from 'rc-calendar/assets/index.css'
import  Calendar from 'rc-calendar'

class Ceotest extends React.Component {
    render(){
        return(

            <div>

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Calendar" id="basic-nav-dropdown">
                                <index>
                                    <Calendar ref="cal" />
                                </index>

                        </NavDropdown>
                    </Nav>
                </Navbar>


            </div>
        )
    }

}

export default Ceotest