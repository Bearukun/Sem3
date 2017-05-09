import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, DropdownButton, Button} from 'react-bootstrap'
import {index} from 'rc-calendar/assets/index.css'
import  Calendar from 'rc-calendar'
import { Link } from 'react-router';
import facade from './components/Facade'

import Autocomplete from 'react-autocomplete'
import { getStates, matchStateToTerm, sortStates, styles } from './components/airportUtil'




class Ceotest extends React.Component {




//Christian test stuff, ignore nad delete when done
    handleClick(event) {
        event.preventDefault()
        var el = event.target
        console.log(el)
    }

    constructor() {
        super();
        {facade.getFlights()};//fetches data
        this.state = {valueFrom: ''};
        this.state = {valueTo: ''}
    }


    render(){
        return(

            <div>

                {/*Navbar*/}
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {/*NavBar Title*/}
                            <a href="#">Search Flight</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    {/*NavBar Items*/}
                    <Nav>
                        {/*Input box for 'From Destination'*/}
                        <NavItem eventKey={1} href="#">
                            {/*Autocomplete for 'From Destination'*/}
                            <label htmlFor="states-autocomplete-from">From </label>
                            <Autocomplete
                                value={this.state.valueFrom}
                                inputProps={{ name: 'US state', id: 'states-autocomplete' }}
                                items={getStates()}
                                getItemValue={(item) => item.name}
                                shouldItemRender={matchStateToTerm}
                                sortItems={sortStates}
                                onChange={(event, valueFrom) => this.setState({ valueFrom })}
                                onSelect={valueFrom => this.setState({ valueFrom })}
                                renderItem={(item, isHighlighted) => (
                                    <div
                                        style={isHighlighted ? styles.highlightedItem : styles.item}
                                        key={item.abbr}
                                    >{item.name}</div>
                                )}
                            />

                        </NavItem>
                        {/*Input box for 'To Destination'*/}
                        <NavItem eventKey={2} href="#">
                            {/*Autocomplete for 'To Destination'*/}
                            <label htmlFor="states-autocomplete-to">To </label>
                            <Autocomplete
                                value={this.state.valueTo}
                                inputProps={{ name: 'US state', id: 'states-autocomplete-to' }}
                                items={getStates()}
                                getItemValue={(item) => item.name}
                                shouldItemRender={matchStateToTerm}
                                sortItems={sortStates}
                                onChange={(event, valueTo) => this.setState({ valueTo })}
                                onSelect={valueTo => this.setState({ valueTo })}
                                renderItem={(item, isHighlighted) => (
                                    <div
                                        style={isHighlighted ? styles.highlightedItem : styles.item}
                                        key={item.abbr}
                                    >{item.name}</div>
                                )}
                            />
                        </NavItem>

                        {/*Dropdown element with Calendar for 'Departure Date' */}
                        <NavDropdown eventKey={3} title="From 'Depature Date'" id="basic-nav-dropdown">
                            <index>
                                <Calendar ref="cal" onClick={this.handleClick.bind(this)} />
                            </index>
                        </NavDropdown>

                        {/*Dropdown element with Calendar for 'Return Date' */}
                        <NavDropdown eventKey={4} title=" To 'Return Date'" id="basic-nav-dropdown">
                            <index>
                                <Calendar ref="cal" onClick={this.handleClick.bind(this)} />
                            </index>
                        </NavDropdown>

                        {/*Dropdown element with number/amount of Passengers */}
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

                        {/*Dropdown element with selection of ticket type*/}
                        <NavItem eventKey={6}>
                        <DropdownButton title="Return type">
                        <MenuItem eventKey="1">Single</MenuItem>
                        <MenuItem eventKey="2">Return</MenuItem>
                        </DropdownButton>
                        </NavItem >

                        {/*Search button*/}
                        <NavItem eventKey={7}>
                            <Link to="/searchresults"><Button bsStyle="warning">Search</Button></Link>
                    </NavItem >

                    </Nav>
                </Navbar>



                {/*Displays/renders Searchresults below the page */}
                {this.props.children}
            </div>


        )
    }

}

export default Ceotest