import React from 'react'
import './MyFriend.css';

const friends = [{ name: "vijaya", city: " edison", state: "NJ" },
                 { name: "rajesh", city: "jersey", state: "NJ" },
                 { name: "madhu", city: "boston" , state: "MA"},
                 { name: "suma" , city:"albany" , state: "NY"},
                 { name: "lohitha", city: " woodbrighe", state: "NJ" }];

export default function MyFriend() {
    return (
        <div className='container'>

            <table className="border">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    friends.map(item => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                        </tr>
                    ))
                    }
                  
                </tbody>
            </table >
        </div >)

}


