import React from 'react'
import { Grid, Row, Col,} from 'react-bootstrap'
import { AppRegistry, View, Image } from 'react-native';

class Searchresults extends React.Component{
    render(){
        return(

            <div>
                {/*Titel*/}
                <h1>SearchResults</h1>

                {/*Grid Containing the Flight Details*/}
            <Grid>
            <div className="row">
            <div className="col-md-12">
            <div className="panel panel-default">
            <div className="panel-heading">Flight #</div>
            <div className="panel-body ">
            <Row className="show-grid">

                {/*Book Now Panel*/}
                <Col xs={2} md={2}>
                        <div className="panel panel-default">
                            {/* Panel Titel*/}
                            <div className="panel-heading">Book Now!</div>
                        <div className="panel-body" >
                            <h5>[Price kr]</h5>
                            <br></br>
                            <button>Book</button>
                        </div>

                </div>
                </Col>

                {/* Panel <Col>, used for arranging the details inside the panel in rows/cols */}
                <Col xs={10} md={10}>
                    <div className="panel panel-default">
                        {/* Panel Titel*/}
                        <div className="panel-heading">Departure</div>
                        <div className="panel-body" >
                            <Grid>
                                {/* Airline & Logo Details + Col settings*/}
                            <Col xs={1} md={1}>
                            <div><h5>[AirLine]</h5></div> <br></br> <h5>[Logo]</h5>
                            </Col>
                                {/* Airport code, Departime & City details + Col settings*/}
                                <Col xs={3} md={3}>
                                    <div><h5>[AirPort Code] + [Depart Time]</h5></div> <br></br> <h5>[City]</h5>
                                </Col>
                                {/* Flight Duration Details + Col settings*/}
                                <Col xs={2} md={2}>
                                    <div><h5>[Flight Duration]</h5></div>
                                </Col>
                                {/* Arrival Time, Airport Code details & City + Col settings*/}
                                <Col xs={3} md={3}>
                                    <div><h5>[Arrival Time] + [AirPort Code]</h5></div> <br></br> <h5>[City]</h5>
                                </Col>
                            </Grid>
                        </div>

                    </div>
                </Col>

                {/* Secret/invisible <Col> to offset the bottom (Return) panel and allign it corretly with the above
                panel (Departture) */}
                <Col xs={2} md={2}></Col>

                {/* Panel <Col>, used for arranging the details inside the panel in rows/cols */}
                <Col xs={10} md={10}>
                    <div className="panel panel-default">
                        {/* Panel Titel*/}
                        <div className="panel-heading">Return</div>
                        <div className="panel-body" >
                            <Grid>
                                {/* Airline & Logo Details + Col settings*/}
                                <Col xs={1} md={1}>
                                    <div><h5>[AirLine]</h5></div> <br></br> <h5>[Logo]</h5>
                                </Col>
                                {/* Airport code, Departime & City details + Col settings*/}
                                <Col xs={3} md={3}>
                                    <div><h5>[AirPort Code] + [Depart Time]</h5></div> <br></br> <h5>[City]</h5>
                                </Col>
                                {/* Flight Duration Details + Col settings*/}
                                <Col xs={2} md={2}>
                                    <div><h5>[Flight Duration]</h5></div>
                                </Col>
                                {/* Arrival Time, Airport Code details & City + Col settings*/}
                                <Col xs={3} md={3}>
                                    <div><h5>[Arrival Time] + [AirPort Code]</h5></div> <br></br> <h5>[City]</h5>
                                </Col>
                            </Grid>

                        </div>

                    </div>
                </Col>

            </Row>

            </div>
        </div>
        </div>
        </div>

                {/*EXAMPLE FLIGHT!*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">Flight #</div>
                            <div className="panel-body ">
                                <Row className="show-grid">

                                    {/*Book Now Panel*/}
                                    <Col xs={2} md={2}>
                                        <div className="panel panel-default">
                                            {/* Panel Titel*/}
                                            <div className="panel-heading">Book Now!</div>
                                            <div className="panel-body" >
                                                <h5>[Price kr]</h5>
                                                <br></br>
                                                <button>Book</button>
                                            </div>

                                        </div>
                                    </Col>

                                    {/* Panel <Col>, used for arranging the details inside the panel in rows/cols */}
                                    <Col xs={10} md={10}>
                                        <div className="panel panel-default">
                                            {/* Panel Titel*/}
                                            <div className="panel-heading">Departure</div>
                                            <div className="panel-body" >
                                                <Grid>
                                                    {/* Airline & Logo Details + Col settings*/}
                                                    <Col xs={1} md={1}>
                                                        <div><h5>SAS</h5></div> <br></br>
                                                        <View>

                                                            <Image
                                                                style={{width: 45, height: 25}}
                                                                source={{uri: 'https://www.sas.dk/eurobonus/partners/flygbolag/scandinavian-airlines.img.png'}}
                                                            />


                                                        </View>
                                                    </Col>
                                                    {/* Airport code, Departime & City details + Col settings*/}
                                                    <Col xs={3} md={3}>
                                                        <div><h5>[AirPort Code] + [Depart Time]</h5></div> <br></br> <h5>[City]</h5>
                                                    </Col>
                                                    {/* Flight Duration Details + Col settings*/}
                                                    <Col xs={2} md={2}>
                                                        <div><h5>[Flight Duration]</h5></div>
                                                    </Col>
                                                    {/* Arrival Time, Airport Code details & City + Col settings*/}
                                                    <Col xs={3} md={3}>
                                                        <div><h5>[Arrival Time] + [AirPort Code]</h5></div> <br></br> <h5>[City]</h5>
                                                    </Col>
                                                </Grid>
                                            </div>

                                        </div>
                                    </Col>

                                    {/* Secret/invisible <Col> to offset the bottom (Return) panel and allign it corretly with the above
                                     panel (Departture) */}
                                    <Col xs={2} md={2}></Col>

                                    {/* Panel <Col>, used for arranging the details inside the panel in rows/cols */}
                                    <Col xs={10} md={10}>
                                        <div className="panel panel-default">
                                            {/* Panel Titel*/}
                                            <div className="panel-heading">Return</div>
                                            <div className="panel-body" >
                                                <Grid>
                                                    {/* Airline & Logo Details + Col settings*/}
                                                    <Col xs={1} md={1}>
                                                        <div><h5>[AirLine]</h5></div> <br></br> <h5>[Logo]</h5>
                                                    </Col>
                                                    {/* Airport code, Departime & City details + Col settings*/}
                                                    <Col xs={3} md={3}>
                                                        <div><h5>[AirPort Code] + [Depart Time]</h5></div> <br></br> <h5>[City]</h5>
                                                    </Col>
                                                    {/* Flight Duration Details + Col settings*/}
                                                    <Col xs={2} md={2}>
                                                        <div><h5>[Flight Duration]</h5></div>
                                                    </Col>
                                                    {/* Arrival Time, Airport Code details & City + Col settings*/}
                                                    <Col xs={3} md={3}>
                                                        <div><h5>[Arrival Time] + [AirPort Code]</h5></div> <br></br> <h5>[City]</h5>
                                                    </Col>
                                                </Grid>

                                            </div>

                                        </div>
                                    </Col>

                                </Row>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Dummy Panel*/}
                <div className="panel panel-default">
                    <div className="panel-heading">Panel Heading</div>
                    <div className="panel-body">Panel Content</div>
                </div>
                </Grid>
            </div>
        )
    }

}

export default Searchresults