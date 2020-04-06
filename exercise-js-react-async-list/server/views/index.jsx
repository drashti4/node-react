const React = require('react');
const DefaultLayout = require('./layouts/default');

function HelloMessage(props){
    return (
        <DefaultLayout title={props.title}>
            <h1>Hello {props.name}</h1>
        </DefaultLayout>
    );
}

module.exports = HelloMessage;

