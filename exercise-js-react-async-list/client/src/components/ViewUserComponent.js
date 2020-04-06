import React from 'react';

export default class UserComponent extends React.Component{
    //runs after render
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {
            users: undefined
        }
    }

    componentDidMount() {
        const url = "http://localhost:3002/users";
        fetch(url)
            .then(response => response.json())
            .then(json => this.fetchSuccess(json));
    }

    deleteUser(e){
        e.preventDefault();
        let userId = e.target.getAttribute('user-data-id');
        console.log('Deleted user id is '+userId);
        const url = `http://localhost:3002/users/${userId}` ;
        return fetch(url,{
            method: 'DELETE',
            MODE: 'cors',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response)
            .then(json => this.showMessage(json))
    }

    showMessage(responseJson){
        console.log(responseJson);
    }


    fetchSuccess(jsonResult){
        this.users = jsonResult;
        const data = jsonResult.map((user,_key) => {return(<><label key={user.id} name={user.userName} value={user.id}>{user.userName}</label>
                    <input key={'delete'+_key} type="button" user-data-id={user.id} onClick={this.deleteUser} defaultValue="delete"/>
                    <input key={`edit${_key}`} type="button" defaultValue="edit"/><br/> </>) });
        this.setState({
            users: data
        })
    }

    render() {
        return(
            <>
            {this.state.users}
            {this.state.users===undefined?"Undefined":`Total number of users are: ${this.state.users.length}`}
            <br/>
            </>
        )
    }
}