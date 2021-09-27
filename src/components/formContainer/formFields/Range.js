import React, {Component} from 'react';
import M from "materialize-css";

export class Range extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {

    const rangeLabel = this.props.rangeLabel;

    return (
        <div>
          <p class="active" for="test5">{rangeLabel}</p>
          <p class="range-field">
            <input type="range" id="test5" min="0" max="100" />
          </p>
        </div>
        )
    }
}
export default Range;