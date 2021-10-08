import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index'

const Checkboxes = () => {

    const checkboxesMarked = useSelector((state) => state.checkboxesMarked);
    const dispatch = useDispatch();
    const { markCheckbox1, markCheckbox2, markCheckbox3, markCheckbox4, markCheckbox5 } = bindActionCreators(actionCreators, dispatch);

    console.log('Checkboxes Marked: ' + checkboxesMarked)

    return (
        <div>
            <p>What real estate investing strategies do you want to learn more about?</p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckbox1(e.target.checked)}
                />
                <span>Buy and Hold</span>
                </label>
            </p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckbox2(e.target.checked)}
                />
                <span>Fix and Flip</span>
                </label>
            </p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckbox3(e.target.checked)}
                />
                <span>Wholesaling</span>
                </label>
            </p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckbox4(e.target.checked)}
                />
                <span>BRRR</span>
                </label>
            </p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckbox5(e.target.checked)}
                />
                <span>Long-term Rentals</span>
                </label>
            </p>
        </div>
        )
}
export default Checkboxes;