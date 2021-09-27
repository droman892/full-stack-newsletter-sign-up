import React, {Component} from 'react';

export class Checkboxes extends Component {

  render() {

    const checkbox1 = this.props.checkbox1;
    const checkbox2 = this.props.checkbox2;
    const checkbox3 = this.props.checkbox3;
    const checkbox4 = this.props.checkbox4;
    const checkbox5 = this.props.checkbox5;

    return (
        <div>
            <p>What real estate investing strategies do you want to learn more about?</p>
            <p>
                <label>
                <input type="checkbox" />
                <span>{checkbox1}</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>{checkbox2}</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>{checkbox3}</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>{checkbox4}</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>{checkbox5}</span>
                </label>
            </p>
        </div>
        )
    }
}
export default Checkboxes;