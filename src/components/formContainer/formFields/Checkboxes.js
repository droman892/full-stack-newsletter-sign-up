import React from 'react';

const Checkboxes = () => {

    return (
        <div>
            <p>What real estate investing strategies do you want to learn more about?</p>
            <p>
                <label>
                <input type="checkbox" />
                <span>Buy and Hold</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>Fix and Flip</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>Wholesaling</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>BRRR</span>
                </label>
            </p>
            <p>
                <label>
                <input type="checkbox" />
                <span>Long-term Rentals</span>
                </label>
            </p>
        </div>
        )
}
export default Checkboxes;