import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, DropdownButton, Button} from 'react-bootstrap'
import {index} from 'rc-calendar/assets/index.css'
import  Calendar from 'rc-calendar'
import { Link } from 'react-router';
import facade from './components/Facade'
import {observer} from "mobx-react";
import Autocomplete from 'react-autocomplete'
import { getAirports, matchAirportToTerm, sortAirports, styles } from './components/airportUtil'



@observer
class Landingpage extends React.Component {

    handleSelect(evt) {
    // what am I suppose to write in there to get the value?
    console.log(evt + 'Hi!')
        this.setState.dropReturnType('Hello!')

}

    handleChange(e){
    console.log(e + 'Hello from here!');

}

    handleChange2(e){
        this.setState({DropdownButtonValue:e.target.value});
    }

//Christian test stuff, ignore nad delete when done
    handleClick(event) {
        event.preventDefault()
        var el = event.target
        console.log(el)
    }

//Multiple of same type of this.state: Only 1 will work correctly! Need some more unique id's?
    constructor() {
        super();
        this.state = {valueFrom: 'Los', valueTo: 'Was', dropPassAmount: 'Passengers', dropReturnType: 'Return Type'};

    }

    render(){
        let origin = "CPH";
        let destination = "";
        let date = "2017-05-04";
        let passengers = 4;

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
                            <label htmlFor="airports-autocomplete-from">From </label>
                            <Autocomplete
                                value={this.state.valueFrom}
                                inputProps={{ name: 'US state', id: 'airports-autocomplete' }}
                                items={getAirports()}
                                getItemValue={(item) => item.name}
                                shouldItemRender={matchAirportToTerm}
                                sortItems={sortAirports}
                                onChange={(event, valueFrom) => this.setState({ valueFrom })}
                                onSelect={valueFrom => this.setState.test1({ valueFrom })}
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
                            <label htmlFor="airports-autocomplete-to">To </label>
                            <Autocomplete
                                value={this.state.valueTo}
                                inputProps={{ name: 'US state', id: 'airports-autocomplete-to' }}
                                items={getAirports()}
                                getItemValue={(item) => item.name}
                                shouldItemRender={matchAirportToTerm}
                                sortItems={sortAirports}
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
                                <Calendar ref="cal" onSelect={function(evt){console.log(evt)}} />
                            </index>
                        </NavDropdown>

                        {/*Dropdown element with Calendar for 'Return Date' */}
                        <NavDropdown eventKey={4} title=" To 'Return Date'" id="basic-nav-dropdown">
                            <index>
                                <Calendar ref="cal" onSelect={function(evt){console.log(evt)}} />
                            </index>
                        </NavDropdown>

                        {/*Dropdown element with number/amount of Passengers */}
                        <NavItem eventKey={5}>
                            <DropdownButton id="dropPass" title={this.state.dropPassAmount} onSelect={function(evt){console.log(evt)}} >
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

                        <DropdownButton id="dropType" title={this.state.dropReturnType} onSelect={this.handleChange}>

                        <MenuItem eventKey="Single">Single</MenuItem>
                        <MenuItem eventKey="Return">Return</MenuItem>
                        </DropdownButton>
                        </NavItem >

                        {/*Search button*/}
                        <NavItem eventKey={7}>
                            <Link to="/searchresults"><Button bsStyle="warning">Search</Button></Link>

                            {facade.getFlights(origin, destination, date, passengers)}{/*fetches data*/}
                    </NavItem >

                    </Nav>
                </Navbar>
                <select
                        value={this.state.selectValue}
                        onChange={this.handleChange}>
                    <option value="Orange">Orange</option>
                    <option value="Radish">Radish</option>
                    <option value="Cherry">Cherry</option>
                </select>



                {/*Displays/renders Searchresults below the page */}
                {this.props.children}
            </div>


        )
    }

}

export default Landingpage