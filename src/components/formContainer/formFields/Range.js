import React from 'react';

const Range = () => {

    return (
        <div>
          <p class="active" for="test5">What's your budget for a monthly mortgage payment?</p>
          <p class="range-field">
            <input type="range" id="test5" min="0" max="100" />
          </p>
        </div>
        )
}
export default Range;