import React, {Component} from 'react';
import M from "materialize-css";




export class Calendar extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <div>
          <label class="active" for="calendar">Your ideal move-in date?</label>
          <input id="calendar" type="text" class="datepicker"/>
        </div>
        )
    }
}
export default Calendar;