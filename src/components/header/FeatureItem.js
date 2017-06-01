import React, {PropTypes} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


const FeatureItem = ({id,title,icon}) => {

    const path = '/' + id;

    return (

      <li>
        <i className={"fa " +(icon)+ " fa-3x"}></i>
        <Link to={path}>{title}</Link>
      </li>

    );
};

FeatureItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string
};

export default FeatureItem;
