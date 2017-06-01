import React, {PropTypes} from 'react';
import { Col, Row } from 'react-bootstrap';


const FeatureItem = ({title,icon}) => {

    return (

      <div>
          <i className={"fa " +(icon)+ " fa-4x"}></i>
        <div>{title}</div>
      </div>

    );
};

FeatureItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
};

export default FeatureItem;
