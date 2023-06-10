import React from 'react'

export default function DisplayCustomer(props){
    const {customer} = props;
    return(
        <div>
            <h1> customer name : {customer.name}</h1>
            <h2>cellno:{customer.cellNo}</h2>

            {/* <h3>Address: </h3>
            <div>
                <div>City: {customer.address.city}</div>
                <div>State: {customer.address.state}</div>
                <div>Zip: {customer.address.zip}</div>
            </div>
            <h3>Account Information: </h3>
            <div><b>Type</b>: {customer.account.type}</div>
            <div><b>AccountNo</b>: {customer.account.accountNo}</div>
            <div><b>balance</b>: {customer.account.balance}</div> */}

            </div>
    )
         
}