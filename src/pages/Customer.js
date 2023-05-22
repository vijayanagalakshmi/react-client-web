

const customers = [{id:1, name: "vijaya", city: " edison", state: "NJ", cell: "63298463" },
                 { id:2, name: "rajesh", city: "jersey", state: "NJ" ,cell : "38271648"},
                 { id:3, name: "madhu", city: "boston" , state: "MA" ,cell : "7967863986"},
                 { id:4,  name: "suma" , city:"albany" , state: "NY", cell: "2200483"},
                 { id:5, name: "lohitha", city: " woodbrighe", state: "NJ", cell: "09878743" }];


const CustomerPage = () => {

    return (
        <div>
            <h1 className='Head'> Customer Details</h1>
            <table className="border">
                <thead>
                    <tr className="Row">
                        <th className="th">ID</th>
                        <th className="th">Name</th>
                        <th className="th">City</th>
                        <th className="th">State</th>
                        <th className="th">CellNo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    customers.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.cell}</td>
                        </tr>
                    ))
                    }
                  
                </tbody>
            </table >
        </div >)

}

export default CustomerPage();