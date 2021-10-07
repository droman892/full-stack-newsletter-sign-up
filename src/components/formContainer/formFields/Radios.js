import React from 'react';

const Radios = () => {

    return (
        <div>
            <p class="active" >Within what range do you want to make your down-payment?</p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>0% - 10%</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>10% - 20%</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>20% - 50%</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>+50%</span>
              </label>
            </p>
        </div>
        )
}
export default Radios;