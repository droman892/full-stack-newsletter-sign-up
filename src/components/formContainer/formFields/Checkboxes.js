import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index'

const Checkboxes = () => {

    const checkbox1 = useSelector((state) => state.checkbox1);
    const checkbox2 = useSelector((state) => state.checkbox2);
    const checkbox3 = useSelector((state) => state.checkbox3);
    const checkbox4 = useSelector((state) => state.checkbox4);
    const checkbox5 = useSelector((state) => state.checkbox5);
    const dispatch = useDispatch();
    const { markCheckbox1, markCheckbox2, markCheckbox3, markCheckbox4, markCheckbox5 } = bindActionCreators(actionCreators, dispatch);
    
    console.log('Checkbox 1: ' + checkbox1);
    console.log('Checkbox 2: ' + checkbox2);
    console.log('Checkbox 3: ' + checkbox3);
    console.log('Checkbox 4: ' + checkbox4);
    console.log('Checkbox 5: ' + checkbox5);

    const getCheckBox = () => {
        if (checkbox1 !== 'Buy and Hold') {
            return markCheckbox1('Buy and Hold')
        } else if (checkbox1 !== '') {
            return markCheckbox1('')
        } 
    }


    return (
        <div>
            <p>What real estate investing strategies do you want to learn more about?</p>
            <p>
                <label for='checkbox1'>
                <input 
                    type="checkbox" 
                    id='checkbox1'
                    onChange={getCheckBox}
                />
                <span>Buy and Hold</span>
                </label>
            </p>
            <p>
                <label for='checkbox2'>
                <input 
                    type="checkbox" 
                    id='checkbox2'
                    onChange={getCheckBox}
                />
                <span>Fix and Flip</span>
                </label>
            </p>
            <p>
                <label for='checkbox3'>
                <input 
                    type="checkbox" 
                    id='checkbox3'
                    onChange={(e) => markCheckbox3(e.target.checked)}
                />
                <span>Wholesaling</span>
                </label>
            </p>
            <p>
                <label for='checkbox4'>
                <input 
                    type="checkbox" 
                    id='checkbox4'
                    onChange={(e) => markCheckbox4(e.target.checked)}
                />
                <span>BRRR</span>
                </label>
            </p>
            <p>
                <label for='checkbox5'>
                <input 
                    type="checkbox" 
                    id='checkbox5'
                    onChange={(e) => markCheckbox5(e.target.checked)}
                />
                <span>Long-term Rentals</span>
                </label>
            </p>
        </div>
        )
}
export default Checkboxes;