import React, {Component} from 'react';

export class Radios extends Component {

  render() {

    const radioLabel = this.props.radioLabel;
    const radio1 = this.props.radio1;
    const radio2 = this.props.radio2;
    const radio3 = this.props.radio3;
    const radio4 = this.props.radio4;

    return (
        <div>
            <p class="active" >{radioLabel}</p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>{radio1}</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>{radio2}</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>{radio3}</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>{radio4}</span>
              </label>
            </p>
        </div>
        )
    }
}
export default Radios;