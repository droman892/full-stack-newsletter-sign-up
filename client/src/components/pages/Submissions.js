import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Nav from  '../layout/Nav';
import Footer from '../layout/Footer';

const Submissions = () => {

    document.title = 'Submissions - DR Enterprises';

    const today = new Date();
    const submissionDate = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

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
        submissionDate,
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
        fetch('/submissions').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setSubmissions(jsonRes))
    })

    return (
        <>
            <Nav/>

                <main>
                    <h3 className='submission-head'>Newsletter Data Submissions</h3>
                    {submissions.map(submission =>
                        <div className='submission-container'>
                            <h5 className='submission-date'>{submissionDate}</h5>
                            <p>
                                <span className='submission-label'>First Name:</span> {submission.firstName}
                            </p>
                            <p>
                                <span className='submission-label'>Last Name:</span> {submission.lastName}
                            </p>
                            <p>
                                <span className='submission-label'>Phone Number:</span> {submission.phoneNum}
                            </p>
                            <p>
                                <span className='submission-label'>Email:</span> {submission.email}
                            </p>
                            <p>
                                <span className='submission-label'>Checkbox 1:</span> {submission.checkbox1}
                            </p>
                            <p>
                                <span className='submission-label'>Checkbox 2:</span> {submission.checkbox2}
                            </p>
                            <p>
                                <span className='submission-label'>Checkbox 3:</span> {submission.checkbox3}
                            </p>
                            <p>
                                <span className='submission-label'>Checkbox 4:</span> {submission.checkbox4}
                            </p>
                            <p>
                                <span className='submission-label'>Checkbox 5:</span> {submission.checkbox5}
                            </p>
                            <p>
                                <span className='submission-label'>Radio Marked:</span> {submission.radioMarked}
                            </p>
                            <p>
                                <span className='submission-label'>Comments (Optional):</span> {submission.comments}
                            </p>

                        </div>
                    )}
                </main>

            <Footer/>
        </>
    )
}

export default Submissions;