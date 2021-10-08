import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index'

const Radios = () => {

    const radioMarked = useSelector((state) => state.radioMarked);
    const dispatch = useDispatch();
    const { radio1Selected, radio2Selected, radio3Selected, radio4Selected } = bindActionCreators(actionCreators, dispatch);

    console.log('Radio Marked: ' + radioMarked)

    return (
        <div>
            <p class="active" >Within what range do you want to make your down-payment?</p>
            <p>
              <label for='radio1'>
                <input 
                  class="with-gap" 
                  name="group1" 
                  type="radio"  
                  id='radio1'
                  onChange={(e) => radio1Selected(e.target.checked)}
                />
                <span>0% - 10%</span>
              </label>
            </p>
            <p>
              <label for='radio2'>
                <input 
                class="with-gap" 
                name="group1" 
                type="radio"  
                id='radio2'
                onChange={(e) => radio2Selected(e.target.checked)}
                />
                <span>10% - 20%</span>
              </label>
            </p>
            <p>
              <label for='radio3'>
                <input 
                class="with-gap" 
                name="group1" 
                type="radio" 
                id='radio3' 
                onChange={(e) => radio3Selected(e.target.checked)}
                />
                <span>20% - 50%</span>
              </label>
            </p>
            <p>
              <label for='radio4'>
                <input 
                class="with-gap" 
                name="group1" 
                type="radio" 
                id='radio4' 
                onChange={(e) => radio4Selected(e.target.checked)}
                />
                <span>+50%</span>
              </label>
            </p>
        </div>
        )
}
export default Radios;