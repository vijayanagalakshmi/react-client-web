import React, {useState,useEffect} from 'react'

import  '../MyFriend.css';

import axios from 'axios';



const FeedbackPage = () => {
    const [fb, setFb] = useState([]);
    useEffect(() => {
        console.log('useEffect executed.');
        const fetchFb = async function () {
            const result = await axios.get('/feedback');
            setFb(result.data);
        }
        fetchFb();
    },[]);

return (
    <div>
        <h1>Feedback</h1>
        <div>
          <h1 className="th">{fb}</h1>
          </div>                            
        
    </div>
)
        
}

export default FeedbackPage;