import React, {useState, useEffect} from 'react';
import { useStore } from 'react-redux';

const TestExpress = () => {
    const [testers, setTesters] = useState([]);

    useEffect(() => {
        fetch('/test').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setTesters(jsonRes.testList))
    })

    return (
    <div>
        {testers.map(tester => <li>{testers}</li>)}
    </div>)
}

export default TestExpress;