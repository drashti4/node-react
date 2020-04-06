import React from 'react';
import ReactDOM from 'react-dom';
import SelectGroupComponent from "./components/SelectGroupComponent";

ReactDOM.render(
<React.StrictMode>
<SelectGroupComponent />
</React.StrictMode>,
document.getElementById('root')
);


//Component

import React from "react";
export default class SelectGroupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:undefined,
            data: []
        };
    }

    componentDidMount() {
        this.setState({
            name: 'Choose a dinosaur',
            data : [
                {
                    label: 'Theropods',
                    options: [
                        {
                            label: 'Tyrannosaurus',
                            number: 0
                        },
                        {
                            label: 'Velociraptor',
                            number: 1
                        },
                        {
                            label: 'Deinonychus',
                            number: 2
                        }
                    ]
                },
                {
                    label: 'Sauropods',
                    options: [
                        {
                            label: 'Diplodocus',
                            number: 3
                        },
                        {
                            label: 'Saltasaurus',
                            number: 4
                        },
                        {
                            label: 'Apatosaurus',
                            number: 5
                        }
                    ]
                }
            ]
        })
    }

    render() {
        const {name} = this.state;
        const {data} = this.state;

        let list = data.length>0 &&
            data.map((item, i)=>{
                    return (
                        <optgroup label = {item.label} >
                            <option> {item.options[0].label} < /option>
                            <option> {item.options[1].label} < /option>
                            <option> {item.options[2].label} < /option>
                        < /optgroup>
            )});

        return(
            <>
            <label>{name}</label>
            <select>
                {list}
            </select>
        </>);
    }
}