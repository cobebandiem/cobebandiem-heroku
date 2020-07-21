import React from 'react';
import './../App.css';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getNotes,saveNote,deteleNote} from './../actions/noteActions';
import {getUser} from './../actions/userActions';
import NoteCard from './NoteCard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
      body:'',
      nodes:{}
    }
  }
  handleChange=(e)=>{
    let target=e.target;
    let name=target.name;
    let value=target.value;
    this.setState({
      [name]:value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const note={
      title:this.state.title,
      body:this.state.body
    }
    this.props.saveNote(note);
  }
  // componentDidMount(){
  //   this.props.getNotes();
  //   this.props.getUser();
  //   this.setState({
  //     notes:this.props.notes
  //   })
  // }

  renderNotes=(notes)=>{
    
    return _.map(notes,(note,index)=>{
      console.log(note);
      return (
        <NoteCard key={index}>
          <div className="panel-heading">
            <h3 className="panel-title">{note.title}</h3>
          </div>
          <div className="panel-body">
            <p>{note.body}</p>
            <button onClick={()=>this.props.deteleNote(index)}>Delete</button>
          </div>
        </NoteCard>
      )
    })
  }
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <legend>Form title</legend>
              <div className="form-group">
                <input type="text" name="title" value={this.state.title} className="form-control no-border" placeholder="Title...." required onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <textarea  type="text" name="body" value={this.state.body} className="form-control no-border" placeholder="Body...." required onChange={this.handleChange}/>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
        <div className="container text-center">
          {this.renderNotes(this.props.notes)}
        </div>
      </div>  
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    notes:state.notes,
    user:state.user
  }
}
export default connect(mapStateToProps,{getNotes,getUser,deteleNote,saveNote})(App);
