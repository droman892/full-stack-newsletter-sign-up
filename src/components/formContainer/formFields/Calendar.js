import React, {Component} from 'react';
import M from "materialize-css";

export class Calendar extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {

    const calendar = this.props.calendar;

    return (
        <div>
          <label class="active" for="calendar">{calendar}</label>
          <input id="calendar" type="text" class="datepicker"/>
        </div>
        )
    }
}
export default Calendar;