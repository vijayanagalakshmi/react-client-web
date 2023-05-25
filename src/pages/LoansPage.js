import React, {useState,useEffect} from 'react'
import axios from 'axios';
import '../MyFriend.css';


const LoansPage = () => {
    const [loans, setLoans] = useState([]);
    useEffect(() => {
        console.log('useEffect executed.');
        const fetchLoans = async function () {
            const result = await axios.get('/loans');
            console.log('result', result);
            console.log('result data', result.data);
            setLoans(result.data);
        }
        fetchLoans();
    },[]);

return (
    <div>
        <h1>List of Loans</h1>
        <div className='Person'>
            {  
                 loans.map(item => (
                    <div  key={item.id}>
                        <div>Id:{item.id} </div>
                        <div> Type:{item.loanType}</div> 
                    </div>
                  
                )
                 )
            }
        </div>
    </div>

)
        }
export default LoansPage;