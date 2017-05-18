import { observable, action, computed} from "mobx";
import fetchHelper from "./fetchHelpers"
const URL = "http://localhost:8084/seedMaven/api/flights/";
const URL2 = "http://localhost:8084/seedMaven/api/flights/";
const abc = "CPH/2017-05-04/4";
class Facade {
    @observable messageFromServer = "";
    @observable errorMessage = "";
    @observable _airlines = [{
            "airline": "",
            "slogan": "",
            "code": "",
            "flights": [{
                "flightId": "",
                "flightNumber": "",
                "date": "",
                "numberOfSeats": 0,
                "totalPrice": 1,
                "traveltime": 2,
                "origin": "",
                "destination": ""
            }]
    }];
    @observable _booking = [{
        "flightNumber": "COL2256",
        "origin": "Copenhagen Kastrup(CPH)",
        "destination": "Charles de Gaulle International(CDG)",
        "date": "2016-04-06T10:00:00.000Z",
        "flightTime": 120,
        "numberOfSeats": 2,
        "reserveeName": "Peter Hansen",
        "passengers": [
            {
                "firstName": "Peter",
                "lastName": "Peterson"
            },
            {
                "firstName": "Jane",
                "lastName": "Peterson"
            }
        ]
    }];

    @action
    setErrorMessage = (err) => {
    this.errorMessage = err;
    }

    @action
    getFlights = (origin, destination, date, passengers) => {
        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("GET", true);
        var p1 = new Promise((resolve, reject) => {
            if (destination === "") {
                resolve(fetch(URL + origin + "/" + date + "/" + passengers, options));
            }
            else {
                console.log("in else");
                resolve(fetch(URL + origin + "/" + destination + "/" + date + "/" + passengers, options));
            }
        });
            p1.then((res) => {
                if (res.status > 210 || !res.ok) {
                    errorCode = res.status;
                }
                return res.json();
            })
            .then(action((res) => {  //Note the action wrapper to allow for useStrict
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {
                    //alert(res[0].airline);
                    this._airlines.replace(res);
                }
            })).catch(err => {
            //This is the only way (I have found) to verify server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
        })
    }

    @action
    submitBooking = (booking) => {
        // console.log(booking);
        // alert("Booking details: "+booking);
        this.errorMessage = "";
        this.messageFromServer = "";
        let errorCode = 200;
        const options = fetchHelper.makeOptions("POST", true);
        var conf = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                flightID: "CA123",
                numberOfSeats: 2,
                "reserveeName": "Peter Hansen",
                "reservePhone":"12345678",
                "reserveeEmail": "peter@peter.dk",
                "passengers":[
                    {
                        "firstName": "Peter",
                        "lastName": "Peterson"
                    },
                    {
                        "firstName": "Jane",
                        "lastName": "Peterson"
                    }
                ]
            })
        };
        // fetch(URL + "api/user/add", conf, options)
        fetch(URL2, conf, options)
            .then((res) => {
                if (res.status > 210 || !res.ok) {
                    errorCode = res.status;
                }
                return res.json();
            })
            .then(action((res) => {  //Note the action wrapper to allow for useStrict
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {
                    alert(res);
                    // this._booking.replace(res);
                }
            })).catch(err => {
            //This is the only way (I have found) to verify server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
        })
    }

    // @action
    // getFlights = () => {
    //     alert("Data fetched successfully");
    // }

    //
    // @computed
    // get books(){
    //     return this._books;
    // }
    //

    //
    // @action
    // editBook = (book)=> {
    //     this.errorMessage = "";
    //     this.messageFromServer = "";
    //     let errorCode = 200;
    //     const options = fetchHelper.makeOptions("POST", true);
    //     var conf = {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: book.id,
    //             title: book.title,
    //             info: book.info,
    //             moreInfo: book.moreInfo
    //         })
    //     };
    //     fetch(URL + "api/user/edit", conf, options)
    //         .then((res) => {
    //             if (res.status > 210 || !res.ok) {
    //                 errorCode = res.status;
    //             }
    //             return res.json();
    //         })
    //         .then(action((res) => {  //Note the action wrapper to allow for useStrict
    //             if (errorCode !== 200) {
    //                 throw new Error(`${res.error.message} (${res.error.code})`);
    //             }
    //             else {
    //                 // if (res.title) {
    //                 // }
    //             }
    //         })).catch(err => {
    //         //This is the only way (I have found) to verify server is not running
    //         this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
    //     })
    //     // UserStore.addBook(this.state.book);
    //     // hashHistory.push("/products");
    // }
    //
    // @action
    // deleteBook = (id) => {
    //     // console.log("book id: "+id);//check the id to ensure we've got hold of the right book to delete
    //     this.errorMessage = "";
    //     this.messageFromServer = "";
    //     let errorCode = 200;
    //     const options = fetchHelper.makeOptions("DELETE", true);
    //     fetch(URL + "api/user/delete/"+id, options)
    //         .then((res) => {
    //             if (res.status > 210 || !res.ok) {
    //                 errorCode = res.status;
    //             }
    //             return res.json();
    //         })
    //         .then(action((res) => {  //Note the action wrapper to allow for useStrict
    //             if (errorCode !== 200) {
    //                 throw new Error(`${res.error.message} (${res.error.code})`);
    //             }
    //             else {
    //                 console.log("deletedBookTitle: "+res.title);
    //                 // const deletedBookTitle = res.title;
    //                 // return deletedBookTitle;
    //                 // this._books.replace(res);
    //                 // this.getBooks();//if book successfully deleted, re-run get books to update local list from new database list
    //             }
    //         })).catch(err => {
    //         //This is the only way (I have found) to verify server is not running
    //         this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
    //     })
    // }
    //
    // @computed
    // get bookCount(){
    //     return this._books.length
    // }
}

let facade = new Facade();

//Only for debugging
//window.userStore = userStore;
export default facade;