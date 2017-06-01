import React, {PropTypes} from 'react';



const UserPanel = ({user}) => {

    return (

      <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <span className="glyphicon glyphicon-user"></span>
          <strong> {user['fname']} </strong>
              <span className="glyphicon glyphicon-chevron-down"></span>
          </a>
          <ul className="dropdown-menu">
              <li>
                  <div className="navbar-login">
                      <div className="row">
                          <div className="col-lg-4">
                              <p className="text-center">
                                  <img src={user['imageUrl']} className="icon-size" alt="profile" />
                              </p>
                          </div>
                          <div className="col-lg-8">
                              <p className="text-left"><strong>{user['fname']+" "+user['lname']}</strong></p>
                            <p className="text-left small">{user['email']}</p>
                              <p className="text-left">
                                  <a href="#" className="btn btn-primary btn-block btn-sm">Profile</a>
                              </p>
                          </div>
                      </div>
                  </div>
              </li>
              <li className="divider navbar-login-session-bg"></li>
              <li><a href="#">Account Settings <span className="glyphicon glyphicon-cog pull-right"></span></a></li>
              <li className="divider"></li>
              <li><a href="#">Sign Out <span className="glyphicon glyphicon-log-out pull-right"></span></a></li>
          </ul>
      </li>

    );
};

UserPanel.propTypes = {
    user: PropTypes.array
};

export default UserPanel;
