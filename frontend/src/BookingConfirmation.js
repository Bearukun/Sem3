import React from 'react'

class bookingconfirmation extends React.Component{
    render(){
        return(
            <div>The Booking Confirmation!

                <div className="panel panel-default">
                    <div className="panel-body">Booking confirmed!</div>
                </div>

                <button type="button" className="btn btn-success">Return to Search</button>

            </div>
        )
    }

}

export default bookingconfirmation