import React, {PropTypes} from 'react';
import { Col, Row } from 'react-bootstrap';


const HeaderLogo = ({logoUrl}) => {

    return (

      <div>
        <a href="">
          <img src={logoUrl} />
        </a>
      </div>

    );
};

HeaderLogo.propTypes = {
    logoUrl: PropTypes.string
};

export default HeaderLogo;
