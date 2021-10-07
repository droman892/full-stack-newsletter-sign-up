import React from 'react';

const Calendar = () => {

    return (
        <div>
          <label class="active" for="calendar">Choose a Date</label>
          <input id="calendar" type="text" class="datepicker"/>
        </div>
        )
}
export default Calendar;