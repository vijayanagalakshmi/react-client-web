import React from 'react'


const account = [{ id:1, accType: "saving", cardNo: "3872914691", balance: "20,000" },
                 { id:2, accType: "checking", cardNo: "7368916784", balance: "12,000" },
                 { id:3, accType: "saving", cardNo: "5465646431", balance: "34,000" },
                 { id:4, accType: "saving", cardNo: "9210178274", balance: "56,000" },
                 { id:5, accType: "checking", cardNo: "1092922938", balance: "25,000" }]


const AccountPage = () => {


    return (
        <div>
            <h1 className='Head'> Account Details of Customers </h1>
            <table className="border">
                <thead>
                    <tr className="Row">
                        <th className="th">ID</th>
                        <th className="th">Account Type</th>
                        <th className="th">CardNumber</th>
                        <th className="th">Balance $</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        account.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.accType}</td>
                                <td>{item.cardNo}</td>
                                <td>{item.balance}</td>
                                
                            </tr>
                        ))
                    }

                </tbody>
            </table >
        </div >)

}
export default AccountPage();