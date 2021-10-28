import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Submissions = () => {

    document.title = 'Submissions - DR Enterprises';

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

    const [submissions, setSubmissions] = useState([{
        firstName,
        lastName,
        phoneNum,
        email,
        checkbox1,
        checkbox2,
        checkbox3,
        checkbox4,
        checkbox5,
        radioMarked,
        comments
    }])

    useEffect(() => {
        fetch('/').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setSubmissions(jsonRes))
    })

    return (
        <>
            <Nav/>

                <main>
                    <h1>Submissions</h1>
                    {submissions.map(submission =>
                        <div>
                            <p>submission.firstName</p>
                            <p>submission.lastName</p>
                        </div>
                    )}
                </main>

            <Footer/>
        </>
    )
}

export default Submissions;