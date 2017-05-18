import React from 'react'
import {Grid, Row, Col,} from 'react-bootstrap'
import {AppRegistry, View, Image} from 'react-native';
import facade from './components/Facade'
import {observer} from "mobx-react";
import {observable, action, computed} from "mobx";
import renderIf from 'render-if';

import './css/App.css';

@observer
class Searchresults extends React.Component {

    constructor(){
        super();
        this.state = {
            selectedOutward: 0,
            selectedReturn: 0,
            selectedRadios: "Total Price:",
            bottomBarTotalPrice: "Total Price: €",
            airlineOut: "Airline: ",
            airlineReturn: "Airline: ",
            flightOut:
                {
                    flightId: "",
                    flightNumber: "",
                    date: "Date/time: ",
                    numberOfSeats: 0,
                    totalPrice: 1,
                    traveltime: 2,
                    origin: "From: ",
                    destination: "To: "
                },
            flightReturn:
                {
                    flightId: "",
                    flightNumber: "",
                    date: "Date/time: ",
                    numberOfSeats: 0,
                    totalPrice: 1,
                    traveltime: 2,
                    origin: "From: ",
                    destination: "To: "
                }
        };
    }

    handleClicksOutward = (airline, flight) => {
        this.setState({
            "selectedOutward": flight.totalPrice,
            "selectedRadios": "Total Price: €" + (parseFloat(flight.totalPrice)+parseFloat(this.state.selectedReturn)).toFixed(2),
            flightOut: {
                flightId: flight.flightId,
                flightNumber: "",
                date: "Date/time: "+flight.date.substr(0, 10)+" at "+flight.date.substr(11, 5),
                numberOfSeats: 2,
                totalPrice: 1,
                traveltime: 2,
                origin: "From: "+flight.origin,
                destination: "To: "+flight.destination
            },
            "airlineOut": "Airline: "+airline.airline
        })
    }

    handleClicksReturn = (airline, flight) => {
        this.setState({
            "selectedReturn": flight.totalPrice,
            "selectedRadios": "Total Price: €" + (parseFloat(this.state.selectedOutward)+parseFloat(flight.totalPrice)).toFixed(2),
            flightReturn: {
                flightId: flight.flightId,
                flightNumber: "",
                date: "Date/time: "+flight.date.substr(0, 10)+" at "+flight.date.substr(11, 5),
                numberOfSeats: 2,
                totalPrice: 1,
                traveltime: 2,
                origin: "From: "+flight.destination,
                destination: "To: "+flight.origin
            },
            "airlineReturn": "Airline: "+airline.airline

        })
    }

    bookFlights = () => {
        facade.submitBooking(this.state.flightOut.flightId, this.state.flightReturn.flightId);

        // alert(facade._booking.origin);

        // alert("It works!!!")
    }

    render() {
        let selectedRadio = 0;

        function convertTravelTime (min) {
            var hours = Math.trunc(min / 60);
            var minutes = min % 60;
            return (hours + "h " + minutes + "m");
        }

        const bookingDetails = facade._bookings.map((booking) => {
            return (
                console.log("abcde: "+booking.flightNumber)
            );
        });

        const rowsOut = facade._airlines.map((airline) => {
            return (
                airline.flights.map(function (flight, index) {
                    return (
                        <div>
                            {/*Grid Containing the Flight Details*/}
                            <Grid>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="panel panel-default">

                                            <div className="panel-heading">Flight {index + 1}</div>
                                            <div className="panel-body ">
                                                <Row className="show-grid">
                                                    {/*Book Now Panel*/}
                                                    <Col xs={2} md={2}>
                                                        <div className="panel panel-default">
                                                            {/* Panel Titel*/}
                                                            <div className="panel-body">
                                                                <h5>€{flight.totalPrice.toFixed(2)}</h5>
                                                                <br></br>

                                                            </div>
                                                            <div className="panel-heading">Select
                                                                <input type="radio" name="myRadios" value={index + 1} onClick={() => {this.handleClicksOutward(airline, flight)}} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    {/* Panel <Col>, used for arranging the details inside the panel in rows/cols */}
                                                    <Col xs={10} md={10}>
                                                        <div className="panel panel-default">
                                                            {/* Panel Titel*/}
                                                            <div className="panel-body">
                                                                <Grid>
                                                                    {/* Airline & Logo Details + Col settings*/}
                                                                    <Col xs={1} md={1}>
                                                                        <div><h5>{airline.airline}</h5></div>
                                                                        <br></br>
                                                                        {/*<h5><a href="C:\Users\Martin\Desktop\Con Air Logo.jpg"/></h5>*/}
                                                                        {/*{img src="C:\Users\Martin\Desktop\Con Air Logo.jpg"}*/}
                                                                        {/*<img src={"#/src/images/conair.jpg"}/>*/}
                                                                        <img src={"C:/Users/Martin/Desktop/Sem3/Sem3/frontend/src/images/conair.jpg"}/>

                                                                    </Col>
                                                                    {/* Airport code, Departime & City details + Col settings*/}
                                                                    <Col xs={3} md={3}>

                                                                        <div>
                                                                            <h5>{flight.origin} {flight.date.substr(11, 5)}</h5>
                                                                        </div>
                                                                        <br></br>
                                                                        <h5>[City]</h5>
                                                                    </Col>
                                                                    {/* Flight Duration Details + Col settings*/}
                                                                    <Col xs={2} md={2}>
                                                                        <div>
                                                                            <h5>{convertTravelTime(flight.traveltime)}</h5>
                                                                        </div>


                                                                    </Col>
                                                                    {/* Arrival Time, Airport Code details & City + Col settings*/}
                                                                    <Col xs={3} md={3}>
                                                                        <div><h5>[Arrival Time]
                                                                            + {flight.destination}</h5></div>
                                                                        <br></br>
                                                                        <h5>[City]</h5>
                                                                    </Col>
                                                                </Grid>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    {/* Secret/invisible <Col> to offset the bottom (Return) panel and allign it corretly with the above
                                                     panel (Departure) */}
                                                    <Col xs={2} md={2}></Col>


                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </Grid>
                        </div>
                    )
                },this)
            )
        }
        );

        const rowsReturn = facade._airlines.map((airline) => {
            return (
                airline.flights.map(function (flight, index) {
                    return (
                        <div>
                            {/*Grid Containing the Flight Details*/}
                            <Grid>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="panel panel-default">

                                            <div className="panel-heading">Flight {index + 1}</div>
                                            <div className="panel-body ">
                                                <Row className="show-grid">
                                                    {/*Book Now Panel*/}
                                                    <Col xs={2} md={2}>
                                                        <div className="panel panel-default">
                                                            {/* Panel Titel*/}
                                                            <div className="panel-body">
                                                                <h5>€{flight.totalPrice.toFixed(2)}</h5>
                                                                <br></br>
                                                            </div>
                                                            <div className="panel-heading">Select
                                                                <input type="radio" name="myRadiosReturn" value={index + 1} onClick={() => {this.handleClicksReturn(airline, flight)}} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    {/* Panel <Col>, used for arranging the details inside the panel in rows/cols */}
                                                    <Col xs={10} md={10}>
                                                        <div className="panel panel-default">
                                                            {/* Panel Titel*/}
                                                            <div className="panel-body">
                                                                <Grid>
                                                                    {/* Airline & Logo Details + Col settings*/}
                                                                    <Col xs={1} md={1}>
                                                                        <div><h5>{airline.airline}</h5></div>
                                                                        <br></br>
                                                                        <h5>[Logo]</h5>
                                                                    </Col>
                                                                    {/* Airport code, Departime & City details + Col settings*/}
                                                                    <Col xs={3} md={3}>

                                                                        <div>
                                                                            <h5>{flight.destination} {flight.date.substr(11, 5)}</h5>
                                                                        </div>
                                                                        <br></br>
                                                                        <h5>[City]</h5>
                                                                    </Col>
                                                                    {/* Flight Duration Details + Col settings*/}
                                                                    <Col xs={2} md={2}>
                                                                        <div>
                                                                            <h5>{convertTravelTime(flight.traveltime)}</h5>
                                                                        </div>


                                                                    </Col>
                                                                    {/* Arrival Time, Airport Code details & City + Col settings*/}
                                                                    <Col xs={3} md={3}>
                                                                        <div><h5>[Arrival Time]
                                                                            + {flight.origin}</h5></div>
                                                                        <br></br>
                                                                        <h5>[City]</h5>
                                                                    </Col>
                                                                </Grid>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    {/* Secret/invisible <Col> to offset the bottom (Return) panel and allign it corretly with the above
                                                     panel (Departure) */}
                                                    <Col xs={2} md={2}></Col>


                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </Grid>
                        </div>
                    )
                },this)
            )
            // });
            // });
        });

        return (
                <div>
                    <div className="panel-heading"><b>Outward</b></div>
                    {bookingDetails}
                    {rowsOut}

                    {/*{renderIf(1+2 === 3)(*/}
                    {renderIf(this.props.flightType === "Return")(
                    <div>
                        <div className="panel-heading"><b>Return</b></div>
                        {rowsReturn}
                    </div>
                    )}

                    <nav className="navbar navbar-inverse navbar-fixed-bottom">
                        <div className="container-fluid">
                            <div className="navbar-header"><a className="navbar-brand">Outward:</a></div>
                            <ul className="nav navbar-nav">
                                <li><a href onclick="return false;">{this.state.flightOut.date.toString()}</a></li>
                                <li><a href onclick="return false;">{this.state.flightOut.origin.toString()}</a></li>
                                <li><a href onclick="return false;">{this.state.flightOut.destination.toString()}</a></li>
                                <li><a href onclick="return false;">{this.state.airlineOut.toString()}</a></li>
                            </ul>
                        </div>
                        {renderIf(this.props.flightType === "Return")(
                            <div>
                            <div className="navbar-header"><a className="navbar-brand">Return:</a></div>
                            <ul className="nav navbar-nav">
                                <li><a href onclick="return false;">{this.state.flightReturn.date.toString()}</a></li>
                                <li><a href onclick="return false;">{this.state.flightReturn.origin.toString()}</a></li>
                                <li><a href onclick="return false;">{this.state.flightReturn.destination.toString()}</a></li>
                                <li><a href onclick="return false;">{this.state.airlineReturn.toString()}</a></li>
                            </ul>
                            </div>
                        )}
                        <div>
                            <ul className="nav navbar-nav" alignItems="flex-end">
                                <li><a href onclick="return false;">{this.state.selectedRadios}</a></li>
                                <li><button className="Btn" onClick={this.bookFlights}>Book</button></li>
                            </ul>
                        </div>
                    </nav>
                </div>
        );
    }
}


export default Searchresults