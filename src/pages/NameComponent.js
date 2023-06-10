import React from "react";
 export default function NameComponent({ name , msg})
 {
    console.log('name, msg', name,msg);
    return (
        <div>{msg},{name}</div>
    )
 }