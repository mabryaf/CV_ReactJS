import React, { Component } from 'react';
import axios from 'axios';

var h1Style = {
    backgroundColor: 'blue'
}
class Test extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            'yis': 'wala'

        }
        this.getData = this.getData.bind(this)
    }
    getData = () => {
        h1Style = { backgroundColor: 'yellow'}
        axios.get('http://localhost:5000')
            .then(res =>{
                this.setState({ yis: res.data })
            }).catch(err =>{
                console.log(err)
            })
    }
    render() {
      return (
        <div>
            <button onClick={() => { this.getData()}}> Test! </button>
            <h1 style={h1Style}> {this.state.yis} </h1>
        </div>
      );
    }
}

export default Test
