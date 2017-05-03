import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {index} from 'rc-calendar/assets/index.css'
import  Calendar from 'rc-calendar'







class Ceotest extends React.Component {

    handleClick(event) {
        event.preventDefault()
        var el = event.target
        console.log(el)
    }


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
                                    <Calendar ref="cal" onClick={this.handleClick.bind(this)} />
                                </index>

                        </NavDropdown>
                    </Nav>
                </Navbar>

                <a href='#' onClick={this.handleClick.bind(this)}>click me</a>


            </div>
        )
    }

}

export default Ceotest