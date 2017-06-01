import React, {PropTypes} from 'react';
import { Col, Row } from 'react-bootstrap';
import './header.css';

import FeatureItem from '../../components/header/FeatureItem';
import HeaderLogo from '../../components/header/Logo';
import UserPanel from '../../components/header/UserPanel';

const HeaderContainer = ({features,user}) => {

    const featureComponents = features.map((f,k) => toFeatureComponents(f,k));

    return (


      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#">
              <img src="logo.png" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-left">
              {featureComponents}
            </ul>

            <ul className="nav navbar-nav navbar-right">
                <UserPanel user={user} />
            </ul>

          </div>


        </div>
      </nav>

    );
};

function toFeatureComponents(f, k) {

    return(

          <FeatureItem id = {f[2]} title = {f[0]} icon = {f[1]} />

    );
}

HeaderContainer.propTypes = {
    features: PropTypes.array
};


export default HeaderContainer;
