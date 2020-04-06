import React from "react";
import NumericInput from "react-numeric-input";

export default class RegisterFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    componentDidMount() {
        this.setState({
            countries: [
                { label: "Afghanistan", value: "1" },
                { label: "South Africa", value: "2" },
                { label: "Albania", value: "3" },
                { label: "Algerai", value: "4" }
            ]
        });
    }

    render() {
        const { countries } = this.state;

        let countriesList =
            countries.length > 0 &&
            countries.map((item, i) => {
                return (<option
                key={i} value={item.value}>
                    {item.label}
                    </option>
            );
            }, this);

        return (
            <div id="main-registration-container">
            <div id="register">
            <h1>Exercise - React JS Form</h1>
        <form>
        <label>
        <b>First Name :</b> &nbsp;
        </label>
        <input type="text" name="firstname" /> <br />
            <br />
            <label>
            <b>Last Name :</b>&nbsp;&nbsp;
        </label>
        <input type="text" name="lastname" /> <br />
            <br />
            <label>
            <b>Age:</b>&nbsp;
        </label>
        <NumericInput min={0} max={100} size="1" /> <br />
            <br />
            <label>
            <b>Country:</b>&nbsp;
        </label>
        <select>{countriesList}</select>
        <input tabIndex="0" style={{ marginLeft: "5px" }} type="submit" className="button" value="Submit" />
            </form>
            </div>
            </div>
    );
    }
}

