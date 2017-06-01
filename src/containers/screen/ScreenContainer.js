import React, {PropTypes} from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './screens-container.css';
import Vehicles from '../../components/feature/Vehicles';
import VehicleOwner from '../../components/feature/VehicleOwner';

const ScreenContainer = ({property}) => {

    return (

          <div className="row">
            <aside className="col-sm-2">
                <div>
                  <div className="thumbnail">

                  </div>
                </div>
            </aside>
            <section className="col-sm-8">
              <div className="mid-item">
                <Route path="/Vehicles" component={Vehicles}/>
                <Route path="/VehicleOwner" component={VehicleOwner}/>
              </div>
            </section>
            <aside className="col-sm-2">
              <div className="right-item">

              </div>
            </aside>
          </div>
        
    );
};

ScreenContainer.propTypes = {
    property: PropTypes.object
};

export default ScreenContainer;
