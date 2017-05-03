import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, DropdownButton, Button} from 'react-bootstrap'
import {index} from 'rc-calendar/assets/index.css'
import  Calendar from 'rc-calendar'
import { Link } from 'react-router';


class Ceotest extends React.Component {

    handleClick(event) {
        event.preventDefault()
        var el = event.target
        console.log(el)
    }


    render(){
        return(

            <div>
                <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                </FormGroup>

                <a href='#' onClick={this.handleClick.bind(this)}>click me</a>
                <input type='text' id='id1' />
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Search Flight</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#"> <input type='text' id='id1' placeholder="From Destination" /></NavItem>
                        <NavItem eventKey={2} href="#"> <input type='text' id='id1' placeholder="To Destination" /></NavItem>

                        <NavDropdown eventKey={3} title="From 'Depature Date'" id="basic-nav-dropdown">
                            <index>
                                <Calendar ref="cal" onClick={this.handleClick.bind(this)} />
                            </index>

                        </NavDropdown>
                        <NavDropdown eventKey={4} title=" To 'Return Date'" id="basic-nav-dropdown">
                            <index>
                                <Calendar ref="cal" onClick={this.handleClick.bind(this)} />
                            </index>

                        </NavDropdown>

                        <NavItem eventKey={5}>
                            <DropdownButton title="Passengers">
                                <MenuItem eventKey="1">1</MenuItem>
                                <MenuItem eventKey="2">2</MenuItem>
                                <MenuItem eventKey="3">3</MenuItem>
                                <MenuItem eventKey="4">4</MenuItem>
                                <MenuItem eventKey="5">5</MenuItem>
                                <MenuItem eventKey="6">6</MenuItem>
                                <MenuItem eventKey="7">7</MenuItem>
                                <MenuItem eventKey="8">8</MenuItem>
                            </DropdownButton>
                    </NavItem >

                        <NavItem eventKey={6}>
                        <DropdownButton title="Return type">
                        <MenuItem eventKey="1">Single</MenuItem>
                        <MenuItem eventKey="2">Return</MenuItem>
                        </DropdownButton>
                        </NavItem >

                        <NavItem eventKey={7}>
                            <Link to="/landingpage/searchresults"><Button bsStyle="warning">Search</Button></Link>
                    </NavItem >

                    </Nav>
                </Navbar>



                {this.props.children}
            </div>


        )
    }

}

export default Ceotest