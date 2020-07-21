import React from 'react'

export default class NoteCard extends React.Component {
    render(){
        return (
            <div className="panel panel-info">
                {this.props.children}
            </div>   
        )
    }
}
