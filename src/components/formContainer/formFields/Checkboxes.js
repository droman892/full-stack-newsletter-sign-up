import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../../state/index'

const Checkboxes = () => {

    const checkboxes = useSelector((state) => state.checkboxes);
    const dispatch = useDispatch();
    const { markCheckboxes } = bindActionCreators(actionCreators, dispatch);

    // console.log(checkboxes)

    return (
        <div>
            <p>What real estate investing strategies do you want to learn more about?</p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckboxes(e.target.checked)}
                />
                <span>Buy and Hold</span>
                </label>
            </p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckboxes(e.target.checked)}
                />
                <span>Fix and Flip</span>
                </label>
            </p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckboxes(e.target.checked)}
                />
                <span>Wholesaling</span>
                </label>
            </p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckboxes(e.target.checked)}
                />
                <span>BRRR</span>
                </label>
            </p>
            <p>
                <label>
                <input 
                    type="checkbox" 
                    onChange={(e) => markCheckboxes(e.target.checked)}
                />
                <span>Long-term Rentals</span>
                </label>
            </p>
        </div>
        )
}
export default Checkboxes;