import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index'

const Radios = () => {

    const radios = useSelector((state) => state.radios);
    const dispatch = useDispatch();
    const { radioSelected } = bindActionCreators(actionCreators, dispatch);

    // console.log(radios)

    return (
        <div>
            <p class="active" >Within what range do you want to make your down-payment?</p>
            <p>
              <label>
                <input 
                  class="with-gap" 
                  name="group1" 
                  type="radio"  
                  onChange={(e) => radioSelected(e.target.checked)}
                />
                <span>0% - 10%</span>
              </label>
            </p>
            <p>
              <label>
                <input 
                class="with-gap" 
                name="group1" 
                type="radio"  
                onChange={(e) => radioSelected(e.target.checked)}
                />
                <span>10% - 20%</span>
              </label>
            </p>
            <p>
              <label>
                <input 
                class="with-gap" 
                name="group1" 
                type="radio"  
                onChange={(e) => radioSelected(e.target.checked)}
                />
                <span>20% - 50%</span>
              </label>
            </p>
            <p>
              <label>
                <input 
                class="with-gap" 
                name="group1" 
                type="radio"  
                onChange={(e) => radioSelected(e.target.checked)}
                />
                <span>+50%</span>
              </label>
            </p>
        </div>
        )
}
export default Radios;