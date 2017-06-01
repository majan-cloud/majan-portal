import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import HeaderContainer from './containers/header/HeaderContainer';
import ScreenContainer from './containers/screen/ScreenContainer';



import './app.css';
import './mainStyle.css';

class App extends Component {

    render() {
        const features = [['Vehicles','fa-car','Vehicles'], ['Vehicle Owners','fa-user-circle','VehicleOwner'], ['Invoices','fa-file-text','Invoices'], ['Settings','fa-cog','Settings']];
        const user = {fname: "Sithum", lname: "Amarasinghe", email: "kgsithum@gmail.com", imageUrl: "default_profile.png"};
        return (
            <Router>
              <div>
                <header>
                  <HeaderContainer features={features} user={user} />
                </header>
                <div className="container-fluid">
                  <ScreenContainer />
                </div>
                <footer className="container-fluid">
                  <h4>FOOTER</h4>
                </footer>
              </div>
            </Router>

        );
    }
}

export default App;
