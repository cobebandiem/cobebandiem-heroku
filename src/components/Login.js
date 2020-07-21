import React from 'react'
import {connect} from 'react-redux';
import {googleLogin} from './../actions/userActions'
class Login extends React.Component {
    componentWillMount(){
        if(this.props.user !== null){
            this.props.history.push('/');
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user!==null){
            nextProps.history.push('/')
        }
    }
    render(){
        return (
            <div className="container">
                <form>
                    <legend>Form Login</legend>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" name="username" placeholder="Input field"/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" className="form-control" name="password" placeholder="Input field"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1>Login with your favourite <b>Socail Network</b></h1>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <button type="button" onClick={this.props.googleLogin} className="btn btn-danger">Login with Google</button>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <button type="button" className="btn btn-success">Login with Twitter</button>
                    </div>   
                </div>  
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps,{googleLogin})(Login);
