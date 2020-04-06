import React from "react";

export default class RadioTitleComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titles:[],
            legend: undefined,
            radioTitles: []
        };
    }

    componentDidMount() {
        this.setState({
            legend: "Titles",
             titles : [
                {
                    label: 'Duke',
                    number: 0
                },
                {
                    label: 'Duchess',
                    number: 1
                },
                {
                    label: 'Marquis',
                    number: 2
                },
                {
                    label: 'Marquise',
                    number: 3
                },
                {
                    label: 'Count',
                    number: 4
                },
                {
                    label: 'Countess',
                    number: 5
                }
            ]
        });
    }

    render(){
        const{legend} = this.state;
        const{titles} = this.state;
        let radioList =
            titles.length > 0 &&
            titles.map((item, i) => {
                return (<><input type="radio" id='title_{item.title}' name="gender" value="male"/>
                    <label for="title_{item.title}">{item.label}</label>
                    <br/></>);
            }, this);


        return(
            <fieldset>
            <legend >{legend}</legend>
            {radioList}
          </fieldset>
        );
    }
}


