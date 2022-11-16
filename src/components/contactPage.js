import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import {AiOutlineCheckCircle} from 'react-icons/ai';


const ContactPage = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [submissionStatus,setSubmissionStatus] = useState(false)

    useEffect(()=>{
      
    },[])
    const submitContactForm = () => {
        const db = getDatabase();
        try
        {
            set(ref(db, 'contactForm/'+name), {
                username: name,
                email: email,
                message: message       
            });
            setName('');
            setEmail('');
            setMessage('');
            setSubmissionStatus(true);
        }
        catch {
            
        }
        
    }
    function writeUserData(userId) {
    
    }
    return ( 
        <div className="contactContainer d-flex justify-content-center align-items-center">
            <div className="innerContactContainer d-flex ">
                { !submissionStatus ?
                    <div className="contactForm">
                        <h1><span>Reach</span> Out To <span>Madman</span> Today.</h1>
                        <div className="d-flex flex-column">
                            <input type="text" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            <textarea placeholder="Your Message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                            <button onClick={submitContactForm}>Submit</button>
                        </div>
                    </div>
                    :   
                    <div className="submissionComplete">
                        <AiOutlineCheckCircle/>
                        <h1>Your message has been sent.</h1>
                        <p>Thank you for supporting Madman</p>
                    </div>
                }   
                <div className="contactDetails">
                    <div className="contactSection">
                        <h3>Address</h3>
                        <p>5503 N Carolina Street, Kirksville, Missouri</p>
                    </div>
                    <div className="contactSection">
                        <h3>Phone</h3>
                        <p>+1 660-785-110</p>
                    </div>
                    <div className="contactSection">
                        <h3>Email</h3>
                        <p>madman@gmail.com</p>
                    </div>
                </div>
                
            </div>
        </div> 
    );
}
 
export default ContactPage;