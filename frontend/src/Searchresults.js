import React from 'react'
import { Grid, Row, Col, Form} from 'react-bootstrap'
import { AppRegistry, View, Image } from 'react-native';
import facade from './components/Facade'
import {observer} from "mobx-react";
import { observable, action, computed} from "mobx";

@observer
class Searchresults extends React.Component{
    render(){
        function convertTravelTime(min){
            var hours = Math.trunc(min/60);
            var minutes = min % 60;
            return (hours + "h "+ minutes + "m");
        }

        var currentValue = 0;
        var myRadio = 0;
        function handleClicks(myRadio) {
            // return(
// currentValue = myRadio.value
//             alert('Old value: ' + currentValue)
//             )
            // alert('New value: ' + myRadio.value);

        }



        // function Validate() {
        //     var radios = document.getElementsByName('IDType')
        //
        //     for (var i = 0; i < radios.length; i++) {
        //         if (radios[i].checked) {
        //             alert("Selected Value = " + radios[i].value);
        //             return true; // checked
        //         }
        //     };
        //
        //     // not checked, show error
        //     document.getElementById('ValidationError').innerHTML = 'Error!!!';
        //     return false;
        // }
        // const flightType =
        const rows = facade._airlines.map((airline) =>{
            return(
                airline.flights.map(function(flight, index){
                    return(
                        <div>
                            {/*Grid Containing the Flight Details*/}
                            <Grid>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="panel panel-default">

                                            <div className="panel-heading">Flight {index+1}</div>
                                            <div className="panel-body ">
                                                <Row className="show-grid">
                                                    {/*Book Now Panel*/}
                                                    <Col xs={2} md={2}>
                                                        <div className="panel panel-default">
                                                            {/* Panel Titel*/}
                                                            <div className="panel-body" >
                                                                <h5>€{Math.round(flight.totalPrice).toFixed(2)}</h5>
                                                                <br></br>

                                                            </div>
                                                            <div className="panel-heading">Select

                                                                <input type="radio" name="myRadios" onClick={handleClicks(this)} value={index+1} />
                                                            </div>

                                                        </div>
                                                    </Col>
                                                    {/* Panel <Col>, used for arranging the details inside the panel in rows/cols */}
                                                    <Col xs={10} md={10}>
                                                        <div className="panel panel-default">
                                                            {/* Panel Titel*/}
                                                            <div className="panel-body" >
                                                                <Grid>
                                                                    {/* Airline & Logo Details + Col settings*/}
                                                                    <Col xs={1} md={1}>
                                                                        <div><h5>{airline.airline}</h5></div>
                                                                        <br></br>
                                                                        <h5>[Logo]</h5>
                                                                    </Col>
                                                                    {/* Airport code, Departime & City details + Col settings*/}
                                                                    <Col xs={3} md={3}>

                                                                        <div><h5>{flight.origin} {flight.date.substr(11, 5)}</h5></div>
                                                                        <br></br>
                                                                        <h5>[City]</h5>
                                                                    </Col>
                                                                    {/* Flight Duration Details + Col settings*/}
                                                                    <Col xs={2} md={2}>
                                                                        <div><h5>{convertTravelTime(flight.travelTime)}</h5></div>





                                                                    </Col>
                                                                    {/* Arrival Time, Airport Code details & City + Col settings*/}
                                                                    <Col xs={3} md={3}>
                                                                        <div><h5>[Arrival Time] + {flight.destination}</h5></div>
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
                })
            )
            // });
            // });
        });

        return(
            <div>
                <div className="panel-heading"><b>Outward</b></div>
                {rows}
                <div className="panel-heading"><b>Return</b></div>


            </div>
        );
    }
}

export default Searchresults