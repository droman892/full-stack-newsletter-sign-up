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

    const getCheckBox1 = () => {
        if (checkbox1 !== 'Buy and Hold') {
            return markCheckbox1('Buy and Hold')
        } else if (checkbox1 !== '') {
            return markCheckbox1('')
        } 
    }

    const getCheckBox2 = () => {
        if (checkbox2 !== 'Fix and Flip') {
            return markCheckbox2('Fix and Flip')
        } else if (checkbox2 !== '') {
            return markCheckbox2('')
        } 
    }

    const getCheckBox3 = () => {
        if (checkbox3 !== 'Wholesaling') {
            return markCheckbox3('Wholesaling')
        } else if (checkbox3 !== '') {
            return markCheckbox3('')
        } 
    }

    const getCheckBox4 = () => {
        if (checkbox4 !== 'BRRR') {
            return markCheckbox4('BRRR')
        } else if (checkbox4 !== '') {
            return markCheckbox4('')
        } 
    }

    const getCheckBox5 = () => {
        if (checkbox5 !== 'Long-term Rentals') {
            return markCheckbox5('Long-term Rentals')
        } else if (checkbox5 !== '') {
            return markCheckbox5('')
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
                    onChange={getCheckBox1}
                />
                <span>Buy and Hold</span>
                </label>
            </p>
            <p>
                <label for='checkbox2'>
                <input 
                    type="checkbox" 
                    id='checkbox2'
                    onChange={getCheckBox2}
                />
                <span>Fix and Flip</span>
                </label>
            </p>
            <p>
                <label for='checkbox3'>
                <input 
                    type="checkbox" 
                    id='checkbox3'
                    onChange={getCheckBox3}
                />
                <span>Wholesaling</span>
                </label>
            </p>
            <p>
                <label for='checkbox4'>
                <input 
                    type="checkbox" 
                    id='checkbox4'
                    onChange={getCheckBox4}
                />
                <span>BRRR</span>
                </label>
            </p>
            <p>
                <label for='checkbox5'>
                <input 
                    type="checkbox" 
                    id='checkbox5'
                    onChange={getCheckBox5}
                />
                <span>Long-term Rentals</span>
                </label>
            </p>
        </div>
        )
}
export default Checkboxes;