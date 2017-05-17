import React from'react';

class BookingDetails extends React.Component{

    render(){
        return(
            <div>
                The Booking Details!
                <div className="container">
                    <h2>Passenger Details</h2>
                    <div className="panel panel-default">
                        <div className="panel-heading">Passenger nr#</div>
                        <div className="panel-body">
                            <label htmlFor="firstName-autocomplete-to">First Name </label>
                            <input type="text" id="to" placeholder="First Name" size="20"></input>

                            <label htmlFor="lastName-autocomplete-to">Last Name </label>
                            <input type="text" id="to" placeholder="Last Name" size="20"></input>

                            </div>
                    </div>
                </div>

                <button type="button" className="btn btn-success">Confirm Booking</button>

                </div>
        )
    }

}

export default BookingDetails
