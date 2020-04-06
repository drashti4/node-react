import React from 'react';

export default class AddUserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.editField = this.editField.bind(this);
        this.state ={
            user: {userName:undefined, age:undefined}
        }
    }

    editField(e)
    {
        const{name,value} = e.target;
        let newUser =this.state.user;
        newUser[name] = value;
        this.setState({user:newUser})
    }
    formSubmit(e)
    {
        e.preventDefault();
        const url = "http://localhost:3002/users/";
         fetch(url,{
            method: 'POST',
            MODE: 'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.user)
        }).then(response => response)
             .then(json => this.showMessage(json))
    }

    showMessage(responseJson){
        console.log(responseJson);
    }

    render() {
        return(
            <form onSubmit={this.formSubmit}>
            <input onChange={this.editField} type="text" name="userName" />
            <input type="number" min={0} max={100} onChange={this.editField} name="age"size="1" /> <br/>
            <input type="submit"/>
            </form>
        )
    }
}