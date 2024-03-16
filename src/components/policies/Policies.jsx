import React, { useEffect } from 'react'
import './policies.css';
const Policies = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    },[])
  return (
    <div className='policies-container'>
        <h2 className='policies-head'>Privacy Policies</h2>
        <div className="policies-content">
            <div className="polies-info">
                <h3 className='policies-info-head'>Information Collection</h3>
                <p className='policies-info-content'>We collect personal information such as names, email addresses, and phone numbers voluntarily provided by participants during registration for the technical fest.</p>
            </div>
            <div className="polies-info">
                <h3 className='policies-info-head'>Use of Information</h3>
                <p className='policies-info-content'>The collected information is used for event registration, communication regarding updates, schedules, and relevant announcements related to the technical fest.</p>
            </div>
            <div className="polies-info">
                <h3 className='policies-info-head'>Security Measures</h3>
                <p className='policies-info-content'>Industry-standard security measures are employed to protect personal information from unauthorized access, disclosure, or misuse.</p>
            </div>
            <div className="polies-info">
                <h3 className='policies-info-head'>Policy Updates</h3>
                <p className='policies-info-content'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the effective date will be revised accordingly.</p>
            </div>
            <div className="polies-info">
                <h3 className='policies-info-head'>Contact Information</h3>
                <p className='policies-info-content'>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at <a href="mailto:csecynosure2k24@gmail.com" target='blank'>our Mail</a> , <a href="https://www.instagram.com/cynosure_2k24?igsh=b21iNDg1eWN0ZWto." target='blank'>Instagram </a></p>
            </div>
        </div>
      
    </div>
  )
}

export default Policies;
