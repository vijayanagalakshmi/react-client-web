import { useParams } from "react-router-dom";
import customers from '../utils/data';



function CustomerPage() {
    const params = useParams();

    console.log("Params", params);
    const { id } = params;
    console.log("id", id);

    const customer = customers[id];
    return (
        <div>
            <h1 className="th">Customer Details</h1>
            <h2>Name: {customer.cName}</h2>
        
            <div>
                <div>CustomerImage: {customer.cImage}</div>
                <br/>
                
            
               <div>CellNo: {customer.cellNo}</div>

                <h3 className="Head">Address: </h3>
                <div>
                    <div><b>City:</b> {customer.address.city}</div>
                    <div><b>State:</b> {customer.address.state}</div>
                    <div><b>Zipcode: </b>{customer.address.zip}</div>

                </div>
                <h3 className="Head">Account Information: </h3>
                <div><b>AccountNo</b>: {customer.account.accountNo}</div>
                <div><b>Type</b>: {customer.account.type}</div>
                <div><b>Balance</b>:{customer.account.balance}</div>
            </div>
        </div>
    )
}

export default CustomerPage;