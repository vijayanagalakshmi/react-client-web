import { useParams } from "react-router-dom";
//import accounts from '../utils/data1';



function AccountPage1() {
    const params = useParams();
    const { id } = params;
    console.log("id", id);

    const account = accounts[id];
    return (
        <div>
            <h1 className="th">Customer Account Details</h1>
            <h1>Id: {account.id}</h1>
            <h2>Name: {account.name}</h2>
        
            <div>
                
            
               <div>Account Type: {account.accType}</div>
               <div>Card No:{account.cardNo}</div>
               <div>Balance:{account.balance}</div>

              </div>  
                
        </div>
    )
}

export default AccountPage1;