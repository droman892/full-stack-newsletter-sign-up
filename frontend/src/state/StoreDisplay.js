import React from "react";
import {useSelector} from 'react-redux';

const StoreDisplay = () => {

    const firstName = useSelector((state) => state.firstName);
    const lastName = useSelector((state) => state.lastName);
    const phoneNum = useSelector((state) => state.phoneNum);
    const email = useSelector((state) => state.email);
    const checkbox1 = useSelector((state) => state.checkbox1);
    const checkbox2 = useSelector((state) => state.checkbox2);
    const checkbox3 = useSelector((state) => state.checkbox3);
    const checkbox4 = useSelector((state) => state.checkbox4);
    const checkbox5 = useSelector((state) => state.checkbox5);
    const radioMarked = useSelector((state) => state.radioMarked);
    const comments = useSelector((state) => state.comments);

    console.log('*****NEWSLETTER STATE*****')
    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);
    console.log('Phone: ' + phoneNum);
    console.log('Email: ' + email);
    console.log('Checkbox 1: ' + checkbox1);
    console.log('Checkbox 2: ' + checkbox2);
    console.log('Checkbox 3: ' + checkbox3);
    console.log('Checkbox 4: ' + checkbox4);
    console.log('Checkbox 5: ' + checkbox5);
    console.log('Radio Marked: ' + radioMarked);
    console.log('Comments: ' + comments);

    return (
        <div></div>
    )
}

export default StoreDisplay;