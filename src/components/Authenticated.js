import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUser} from './../actions/userActions';
import {getNotes} from './../actions/noteActions';

class Authenticated extends Component {
    componentDidMount(){
        if(this.props.user===null){
            this.props.history.push('/login');
        }
    }
    render() {
        const {user,children}=this.props;
        return (user)?<div>{children}</div>:null;
    }
}
const mapStateToProps=state=>{
    return {
        user:state.user
    }
}

export default withRouter(connect(mapStateToProps,{getNotes,getUser})(Authenticated));