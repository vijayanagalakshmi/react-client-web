import pic1 from "./Images/pic1.jpeg"
import pic2 from "./Images/pic2.jpeg"
import pic3 from "./Images/pic3.jpeg"
import pic4 from "./Images/pic4.jpeg"
import pic5 from "./Images/pic5.jpeg"



const customers = [
    {
        id: 0, cName: "Vijaya", cellNo: 8738934647,
        cImage: pic1,


        address: {
            city: "edison",
            state: "NJ",
            zip: "08820",
        },
        account: {
            type: "Checking Account",
            accountNo: 1234567890,
            balance: 10000,
        }
    },
    {
        id: 1, cName: "Chandra", cellNo: 6437545478,
        cImage: pic2,
        
        address: {
            city: "JerseyCity",
            state: "NJ",
            zip: "07030",
        },
        account: {
            type: "Credit Account",
            accountNo: 68448822334,
            balance: 40000
        }
    },
    {
        id: 2, cName: "Rajesh", cellNo: 4553862456,
        cImage: pic3,
        address: {
            city: "Boston",
            state: "MS",
            zip: 67678,
        },
        account: {
            type: "Savings Account",
            accountNo: 1029283764,
            balance: 40000
        }
    },
    {
        id: 3, cName: "Suresh", cellNo: 78367566,
        cImage: pic4,
        address: {
            city: "Austin",
            state: "TX",
            zip: 73301,
        }, account: {
            type: "Checking Account",
            accountNo: 6836745629,
            balance: 30000
        }
    },
    {
        id: 4, cName: "latha", cellNo: 783575566,
        cImage:pic5,
        address: {
            city: "Houston",
            state: "TX",
            zip: 75001,
        }, account: {
            type: "Saving Account",
            accountNo: 68435645629,
            balance: 45000
        }
    },
];


export default customers;