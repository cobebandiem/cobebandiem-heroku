import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser,logout} from './../actions/userActions'

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to='/'>DIARY2020</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to='/logout' onClick={()=>this.props.logout()}>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}

export default connect(mapStateToProps,{getUser,logout})(Header);