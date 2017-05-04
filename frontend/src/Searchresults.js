import React from 'react'
import { Grid, Row, Col, Jumbotron, Nav, Navbar, NavItem} from 'react-bootstrap'

class Searchresults extends React.Component{
    render(){
        return(
            <div><h1>SearchResults</h1>

                <Grid>
            <div className="row">
            <div className="col-md-12">
            <div className="panel panel-default">
            <div className="panel-heading">Flight #</div>


                <div className="panel-body ">

            <Row className="show-grid">

                <Col xs={2} md={2}>

                        <div className="panel panel-default">
                            <div className="panel-heading">Book Now!</div>
                        <div className="panel-body" >
                            <h5>[Price kr]</h5>
                            <br></br>
                            <button>Book</button>
                        </div>

                </div>
                </Col>

                <Col xs={10} md={10}>
                    <div className="panel panel-default">
                        <div className="panel-heading">Departure</div>
                        <div className="panel-body" >

                            <div><h5>[AirLine]</h5></div> <div><h5>Cph</h5></div><br></br><br></br> <h5>[Logo]</h5>
                        </div>

                    </div>
                </Col>


                <Col xs={4} md={4}></Col>
                <Col xs={10} md={10}>
                    <div className="panel panel-default">
                        <div className="panel-heading">Return</div>
                        <div className="panel-body" >

                            <h5>[AirLine]<br></br><br></br> [Logo]</h5>
                        </div>

                    </div>
                </Col>

            </Row>

            </div>
        </div>
        </div>
        </div>

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